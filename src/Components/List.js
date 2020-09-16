import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './List.css';

class List extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired
    };

    state = {
        filterText: ''
    };

    onChangeFilterText = (e) => {
        this.setState({
            filterText: e.target.value
        }, () => {
            console.log(this.state)
        })
    }

    render() {
        const filteredText = this.props.contacts.filter(
            contact => {
                return contact.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
            });

        return (
            <div className={"listArea"}>
                <input name={"filter"} id={"filter"} onChange={this.onChangeFilterText}
                    value={this.state.filterText} placeholder={"Filter by name or phone"}></input>
                <ul className={"list"}>
                    {
                        filteredText.map(contact => {
                            return (
                                <li key={contact.phone}>
                                    <span className={"name"}>{contact.name}</span>
                                    <span className={"phone"}>{contact.phone}</span>
                                </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default List;