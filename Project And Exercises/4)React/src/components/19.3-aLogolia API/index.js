import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './style.css'

const Search = () => {
    const [search, setSearch] = useState('hooks')
    const [searchTerm, setSearchTerm] = useState('')
    const [data, setData] = useState([])




    useEffect(() => {
        const Alogolia = async () => {
            let random = `https://hn.algolia.com/api/v1/search?query=${searchTerm}`
            let info = (await (await fetch(random)).json());

            setData(info.hits)
        }
        Alogolia()
    }, [searchTerm])

    return (
        <div>
            <h1>Algolia search</h1>
            <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} />
            <input type="button" value='search' onClick={() => setSearchTerm(search)} />

            <ul> {data.length == 0 ? <div class="lds-hourglass"></div> : data.map(item => {
                return <li><a href={item.url}>{item.title}</a></li>
            })}
            </ul>

        </div>
    )
}

export default Search