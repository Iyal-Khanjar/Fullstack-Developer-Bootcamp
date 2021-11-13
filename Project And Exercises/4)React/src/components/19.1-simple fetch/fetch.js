import React from "react";
import { useEffect } from "react";

const StarWarsApi = () => {
    const [moviesTitle, setmoviesTitle] = React.useState('')
    const [director, setDirector] = React.useState('')

    useEffect(async () => {
        let random = `https://swapi.dev/api/films/1/`
        let info = (await (await fetch(random)).json());
        setmoviesTitle(info.title)
        setDirector(info.director)
        console.log(info);


    }, [])
    return (
        <div style={{ textAlign: 'center' }}>
            <div>movies title: {moviesTitle}</div>
            <div>movies director: {director}</div>
        </div>
    )
}

export default StarWarsApi