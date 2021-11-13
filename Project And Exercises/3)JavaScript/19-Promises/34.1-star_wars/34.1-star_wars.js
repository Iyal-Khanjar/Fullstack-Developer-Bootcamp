async function person() {
    let arr = []
    for (let i = 1; i <= 10; i++) {
        let url = `https://swapi.dev/api/people/${i}/`
        let url2 = `https://swapi.dev/api/planets/${i}/`
        let info = await (await fetch(url)).json();
        let info2 = await (await fetch(url2)).json();

        let obj = {
            name: info.name,
            height: info.height,
            hair_color: info.hair_color,
            planet: {
                name: info2.name,
                population: info2.population
            }
        }
        arr.push(obj)
    }
    console.log(arr);
    let table = document.querySelector('#mytable');
    let out = ''
    for (i = 0; i <= 10; i++) {
        out += '<tr>'
        for (j = 0; j <= 5; j++) {
            if (j == 0 && i == 0)
                out += '<th>name</th>'
            if (j == 1 && i == 0)
                out += '<th>hair</th>'
            if (j == 2 && i == 0)
                out += '<th>height</th>'
            if (j == 3 && i == 0)
                out += '<th>planet name</th>'
            if (j == 4 && i == 0)
                out += '<th>planet population</th>'

            if (j == 1 && i !== 0)
                out += `<th>${arr[i - 1].name}</th>`
            if (j == 2 && i !== 0)
                out += `<th>${arr[i - 1].hair_color}</th>`
            if (j == 3 && i !== 0)
                out += `<th>${arr[i - 1].height}</th>`
            if (j == 4 && i !== 0)
                out += `<th>${arr[i - 1].planet.name}</th>`
            if (j == 5 && i !== 0)
                out += `<th>${arr[i - 1].planet.population}</th>`
        }
        out += '</tr>'
    }
    table.innerHTML = out

}
person()


