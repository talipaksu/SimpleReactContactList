import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    static propTypes = {
        addContact: PropTypes.func
    }

    state = {
        name: '',
        phone: ''
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addContact({
            ...this.state
        })
        console.log(this.state)
        this.setState({
            name: '',
            phone: ''
        }, () => {
            console.log(this.state)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="name" id="name"
                     value = {this.state.name} onChange={this.onChange} placeholder="Enter a name" />
                    <input name="phone" id="phone"  
                    value = {this.state.phone} onChange={this.onChange} placeholder="Enter a phone" />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default Form;