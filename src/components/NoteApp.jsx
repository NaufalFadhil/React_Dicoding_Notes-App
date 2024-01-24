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

    // this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  // onDeleteHandler(id) {
  //   const contacts = this.state.contacts.filter((contact => contact.id !== id));
  //   this.setState({ contacts });
  // }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createAt: new Date().toLocaleDateString(),
            archived: false,
          }
        ]
      }
    })
  }

  render() {
    return (
      <div className='note-app'>
        <NoteHeader />
        {/* <ContactInput addContact={this.onAddContactHandler} /> */}
        <NoteBody notes={this.state.notes} addNote={this.onAddNoteHandler} />
        {/* <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} /> */}
      </div>
    )
  }
}

export default NoteApp;