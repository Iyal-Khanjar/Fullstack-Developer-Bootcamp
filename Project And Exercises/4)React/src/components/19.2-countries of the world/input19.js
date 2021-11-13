import React from 'react'

class Input extends React.Component {
    render = () => {
        return (
            <input type='text' placeholder='Country Search...' onChange={(e) => this.props.inputChange(e)}></input>
        )
    }
}
export default Input
