import React from 'react';
import List from './List';
import Form from './Form';


const Contacts = (props) =>
    <div>
        <List contacts={props.contacts} />
        <Form addContact={props.addContact} />
    </div>;

export default Contacts;