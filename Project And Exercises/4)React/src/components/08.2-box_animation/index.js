import React from "react";
import './style.css'

class BoxAnimation extends React.Component {
    constructor() {
        super()
        this.state = {
            afterOneSec: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                afterOneSec: !this.state.afterOneSec
            })
        }, 1000);
    }

    componentDidUpdate() {

        document.querySelectorAll(".box").forEach(element => {
            element.animate([
                { transform: 'translatex(-110px)' },
                { transform: 'translatex(+10px)' }
            ], {
                duration: 5000,
                iterations: 1,
                animationFillMode : "forwards"
            });
        });
        // document.querySelectorAll(".box").forEach(element => {
        //     element.style.animationFillMode = "forwards";
        // })

    }


    render() {
        return (
            <div>
                <div className='box box1'></div>
                <div className='box box2'></div>
                <div className='box box3'></div>
            </div >
        )
    }
}

export default BoxAnimation