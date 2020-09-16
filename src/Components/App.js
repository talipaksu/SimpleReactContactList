import React from 'react';
import '../App.css';
import Contacts from './Contacts';

class App extends React.Component {

  constructor(props){
    super(props);
    this.addContact = this.addContact.bind(this);

  }

  state = {
    contacts: [
      {
        name: 'Jennifer Lopez',
        phone: 1111111111
      },
      {
        name: 'Sandra Bullock',
        phone: 2222222222
      }
    ]
  }

  addContact(contact){
    const { contacts } = this.state
    contacts.push(contact);

    this.setState({
      contacts
    })
  }

  render() {
    return (
      <div className="App" >
        <Contacts contacts={this.state.contacts} addContact = {this.addContact} />
      </div>
    )
  };
}

export default App;
