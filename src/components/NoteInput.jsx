
import React from 'react'
import NoteInputBody from './NoteInputBody';

class NoteInput extends React.Component {
  render () {
    return (
      <div className='note-input'>
        <h1 className='note-input__title'>Buat Catatan</h1>
        <NoteInputBody />
      </div>
    )
  }
}

export default NoteInput;