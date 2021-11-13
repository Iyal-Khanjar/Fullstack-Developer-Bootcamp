import React from "react";
import './style.css'
class Spinner extends React.Component {

    // state = { renderContent: '', timer: 5 }
    state = { renderContent: '' }
    spinner1() {
        return <div className="loader1"></div>

    }
    spinner2() {
        return <div className="loader2"></div>
    }
    spinner3() {
        return <div className="loader3"></div>
    }
    getRandomSpinner = () => {
        let rand = Math.floor((Math.random() * 3) + 1)
        console.log(rand);
        if (rand == 1)
            return this.spinner1()
        if (rand == 2)
            return this.spinner2()
        if (rand == 3)
            return this.spinner3()
    }

    componentDidMount() {
        this.setState({ renderContent: this.getRandomSpinner() })
        // setInterval(() => {
        //     this.setState({ timer:--this.state.timer })
        // }, 1000);

    }

    componentDidUpdate() {
        setTimeout(() => {
            this.setState({ renderContent: '', timer: '' })
        }, 5000);
    }

    render() {

        return (
            <div>
                {this.state.renderContent}
                {/* <div className="timer"> {this.state.timer}</div> */}
            </div>
        )

    }
}

export default Spinner