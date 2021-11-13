import React from "react";
import reactDom from "react-dom";

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0 }
    }
    counter = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    render() {
        return (
            <div>
                <input type='button' value='increment' onClick={this.counter} />
                {this.state.counter}
            </div>
        )
    }
}

export default Counter