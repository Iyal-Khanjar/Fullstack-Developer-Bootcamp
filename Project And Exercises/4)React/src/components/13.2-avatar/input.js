import React from 'react'

class Input extends React.Component {
    render = () => {
        return (
            <input type='text' placeholder='People Search...' onChange={(e) => this.props.callbackFunction(e)}></input>
        )
    }
}
export default Input
