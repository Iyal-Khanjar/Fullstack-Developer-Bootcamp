import React from "react";
import Child from "./child"

class Parent extends React.Component {
    state = {
        color: ''
    }
    onblueBtnClickEvent = (blueBtn) => {
        console.log(blueBtn);
        this.setState({ color: blueBtn })
    }
    onRedBtnClickEvent = (redBtn) => {
        console.log(redBtn);
        this.setState({ color: redBtn })
    }
    onYellowBtnClickEvent = (yellowBtn) => {
        console.log(yellowBtn);
        this.setState({ color: yellowBtn })
    }

    render() {
        return (
            <div>
                <Child onBlueClick={this.onblueBtnClickEvent}
                    onRedClick={this.onRedBtnClickEvent}
                    onYellowClick={this.onYellowBtnClickEvent} />
                <br /><br /><br />
                The color selected is: {this.state.color}
            </div>
        )
    }

}

export default Parent