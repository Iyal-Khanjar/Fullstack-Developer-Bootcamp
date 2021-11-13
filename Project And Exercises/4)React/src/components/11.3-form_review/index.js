import React from 'react';
import Select from './age';
import InputText from './text_input';
import TextArea from './text_area';

class Form extends React.Component {
   state = {
            firstName: '',
            lastName: '',
            age: 0,
            freeText: '',
            showPreview: false
        }
    
    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            showPreview: true
        })
    }
    handleChange = (key, value) => {
        console.log(`key=${key},value=${value}`);
        this.setState({
            [key]: value
        })
    }
    render() {
        if (this.state.showPreview) {
            return (
                <div>
                    <div>firstName: {this.state.firstName}</div>
                    <div>lastName: {this.state.lastName}</div>
                    <div>Age:{this.state.age}</div>
                    <div>freeText: {this.state.freeText}</div>
                    <input type="button" value='Back' onClick={() => { this.setState({ showPreview: false }) }}></input> <input type="button" value='Send Survey' onClick={() => { alert('Survey Sent!'); window.location.reload() }}></input>
                </div>
            )
        }
        else {
            return (
                <form id='myForm'>
                    <InputText formID='myForm' askFor='First Name:' objKey='firstName' onChange={this.handleChange} />
                    <InputText formID='myForm' askFor='Last Name:' objKey='lastName' onChange={this.handleChange} />
                    <div>
                        Age:<Select formID='myForm' objKey='age' maxAge={100} onChange={this.handleChange} />
                    </div>
                    <TextArea formID='myForm' objKey='freeText' onChange={this.handleChange} />
                    <input type="Submit" onClick={this.handleClick}></input>
                </form>
            )
        }
    }
}

export default Form;