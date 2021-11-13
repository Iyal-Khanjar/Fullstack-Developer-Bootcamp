import React from "react";



class Child extends React.Component {
    state = {
        blueBtn: 'blue',
        redBtn: 'red',
        yellowBtn: 'yellow'
    }
    onblueBtnClickEvent = event => {
        this.props.onBlueClick(this.state.blueBtn)
    }
    onRedBtnClickEvent = event => {
        this.props.onRedClick(this.state.redBtn)
    }
    onYellowBtnClickEvent = event => {
        this.props.onYellowClick(this.state.yellowBtn)
    }

    render() {
        return (
            <div>
                <input type="button" value="blue" style={{ backgroundColor: 'blue' }} onClick={this.onblueBtnClickEvent}></input><br />
                <input type="button" value="red" style={{ backgroundColor: 'red' }}onClick={this.onRedBtnClickEvent}></input><br />
                <input type="button" value="yellow" style={{ backgroundColor: 'yellow' }}onClick={this.onYellowBtnClickEvent}></input>
            </div>
            
        )
    }

}
export default Child