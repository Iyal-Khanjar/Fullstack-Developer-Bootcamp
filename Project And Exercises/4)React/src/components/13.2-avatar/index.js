import React from "react";
import './style.css'
import Input from "./input";


class PeopleApi extends React.Component {
    state = {
        persons: [],
        bySearch: [],
        showFirst: true
    }
    componentDidMount = async () => {
        let random = 'https://randomuser.me/api/?results=10'
        let info = await (await fetch(random)).json();
        for (let i = 0; i <= 9; i++) {
            this.setState({
                persons: [...this.state.persons, {
                    picture: info.results[i].picture.large,
                    name: info.results[i].name.first
                }]
            })
        }
    }
    callbackFunction = (e) => {
        this.setState({ showFirst: !this.state.showFirst })
        const PeopleBySearch = this.state.persons.filter(persons => {
            return persons.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        this.setState({ bySearch: PeopleBySearch })
    }



    render() {

        return (
            <div>
                <span className='filter'>Filter: </span>
                <Input callbackFunction={this.callbackFunction} />

                <div className='grid'>
                    {
                        this.state.showFirst ? this.state.persons.map((people, idx) => {
                            return <div key={idx} className='dirDown'>
                                {people.name}
                                {<img src={people.picture}></img>}
                            </div>
                        }) : this.state.bySearch.map((people, idx) => {
                            return <div key={idx} className='dirDown'>
                                {people.name}
                                {<img src={people.picture}></img>}
                            </div>
                        })
                    }
                </div>

            </div>
        )

    }
}



export default PeopleApi