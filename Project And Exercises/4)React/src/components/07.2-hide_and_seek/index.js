import React from "react";
import './style.css'

class HideAndSeek extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: 'none'
        }
    }
    ShowOrHide = () => {
        this.setState(() => {
            return this.state.display === 'none' ? { display: 'block' } : { display: 'none' }
        })
    }
    render() {
        console.log(this.state.display);
        return (
            <div>
                <input type='button' value={this.state.display === 'none' ? 'show' : 'hide'} onClick={this.ShowOrHide} />
                <div className='yellow' style={{ display: this.state.display }}></div>
            </div>
        )
    }
}

export default HideAndSeek