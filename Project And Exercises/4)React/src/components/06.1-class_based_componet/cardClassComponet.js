import React from 'react'
import './style.css'

class CardClassComponets extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div className="card">
                <img alt="image" src={this.props.image} />
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
                <a href="/">SHARE</a>
                <a href="/">EXPLORE</a>
            </div>
        )

    }
}
export default CardClassComponets