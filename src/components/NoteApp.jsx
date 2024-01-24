import React from 'react';
// import ContactList from './ContactList';
import { getInitialData } from '../utils/index';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
// import ContactInput from './ContactInput';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }

    console.log(this.state.notes);

  //   this.onDeleteHandler = this.onDeleteHandler.bind(this);
  //   this.onAddContactHandler = this.onAddContactHandler.bind(this);
  // }

  // onDeleteHandler(id) {
  //   const contacts = this.state.contacts.filter((contact => contact.id !== id));
  //   this.setState({ contacts });
  // }

  // onAddContactHandler({ name, tag }) {
  //   this.setState((prevState) => {
  //     return {
  //       contacts: [
  //         ...prevState.contacts,
  //         {
  //           id: +new Date(),
  //           name,
  //           tag,
  //           imageUrl: '/images/default.jpg'
  //         }
  //       ]
  //     }
  //   })
  }

  render() {
    return (
      <div className='note-app'>
        <NoteHeader />
        {/* <ContactInput addContact={this.onAddContactHandler} /> */}
        <NoteBody notes={this.state.notes} />
        {/* <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} /> */}
      </div>
    )
  }
}

export default NoteApp;