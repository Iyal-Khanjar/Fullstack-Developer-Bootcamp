import React from "react";

class LifeCycleMethods extends React.Component {
    constructor() {
        super()
        this.state = {
            favoriteColor: 'red'
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                favoriteColor: 'green'
            })
        }, 1000);
    }
    componentDidUpdate() {
        document.querySelector('#color').innerHTML = `<h1>The updated favorite color is ${this.state.favoriteColor}</h1>`
    }
    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <div id="color"></div>
            </div>
        )
    }
}

export default LifeCycleMethods