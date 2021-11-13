import React from "react";
import './style.css'

class GetJokes extends React.Component {
    state = {
        displayJoke: ''
    }
    joke = async () => {
        try {
            let random = 'https://api.chucknorris.io/jokes/random'
            let info = (await (await fetch(random)).json()).value;
            this.setState({ displayJoke: info })
        } catch (err) {
            this.setState({ displayJoke: 'no jokes sadly :(' })
        }
    }

    render() {
        return (
            <div>
                <input type="button" value="click" onClick={this.joke} /> 
                {this.state.displayJoke}
            </div>
        )

    }
}

export default GetJokes