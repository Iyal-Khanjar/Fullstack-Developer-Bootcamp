import React from "react";

class BoxColorChange extends React.Component {
    constructor() {
        super()
        this.state = {
            favoriteColor: 'red',
            radius: '0px'
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                favoriteColor: 'green'
            })
        }, 500);
        setTimeout(() => {
            this.setState({
                favoriteColor: 'blue'
            })
        }, 1000);
        setTimeout(() => {
            this.setState({
                favoriteColor: 'yellow'
            })
        }, 1500);
        setTimeout(() => {
            this.setState({
                favoriteColor: 'black',
            })
        }, 2000);
        setTimeout(() => {
            this.setState({
                radius: '50%'
            })
        }, 2500);
    }

    render() {
        return (
            <div>
                <div style={{ height: '100px', width: '100px', backgroundColor: this.state.favoriteColor, borderRadius: this.state.radius }}></div>
            </div>
        )
    }
}

export default BoxColorChange