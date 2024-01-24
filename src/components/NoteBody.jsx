import React from 'react'
import NoteInput from './NoteInput'
import NoteList from './NoteList'
import { showFormattedDate } from '../utils';

class NoteBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes,
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note => note.id !== id));
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          }
        ]
      }
    })
  }

  render() {
    return (
      <div className='note-app__body'>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    )
  }
}

export default NoteBody