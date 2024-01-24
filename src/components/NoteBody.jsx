import React from 'react'
import NoteInput from './NoteInput'

class NoteBody extends React.Component {
  render() {
    return (
      <div className='note-app__body'>
        <NoteInput />
        <h1>Catatan Aktif</h1>
      </div>
    )
  }
}

export default NoteBody