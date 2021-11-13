import React from "react";


const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Johnny",
        birthday: "1-10-1992",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

class Data extends React.Component {
    state = { people: [] }


    componentDidMount() {
        const propleOlder1990 = data.filter(person => {
            if (person.birthday.split('-')[2] < 1990)
                return person;
        })
        this.setState({ people: propleOlder1990 });
    }
    render() {
        const question1 = data.map(filteredPerson => (<li>{filteredPerson.name}</li>))
        const question2 = this.state.people.map(person => {
            return <ul>
                {person.name}
                <li>{person.birthday}</li>
                {person.favoriteFoods.meats.map(meatsFood => {
                    return <ul> meats:
                        <li>{meatsFood}</li>
                    </ul>
                })}
                {person.favoriteFoods.fish.map(fishFood => {
                    return <ul> fish:
                        <li>{fishFood}</li>
                    </ul>
                })}
            </ul>
        })

        return (
            <div>
                {question1}
                {question2}
            </div>
        )
    }
}

export default Data