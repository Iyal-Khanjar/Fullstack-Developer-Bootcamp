import React from "react";
import { useEffect } from "react";
import Input from "./input19";

const CountriesApi = () => {
    const [country, setCountry] = React.useState([])
    const [search, setSearch] = React.useState([])
    const [firstShow, setFirstShow] = React.useState(true)

    useEffect(async () => {
        let random = `https://restcountries.com/v2/all`
        let info = (await (await fetch(random)).json());
        let AllCountriesName = info.map(count => {
            return count.name
        })
        setCountry(AllCountriesName)


    }, [])

    const Changed = (e) => {
        setFirstShow(!firstShow)
        console.log(firstShow);
        let bySearch = country.filter(name => {
            return name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setSearch(bySearch)
    }
    return (
        <div>
            <Input inputChange={Changed} />

            {
                firstShow ? country.map((count, idx) => {
                    return <ul key={idx}>
                        <li >{count}</li>
                    </ul>
                }) : search.map((count, idx) => {
                    return <ul key={idx}>
                        <li >{count}</li>
                    </ul>
                })
            }
        </div>
    )
}

export default CountriesApi