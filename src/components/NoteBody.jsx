import React from 'react'
import NoteInput from './NoteInput'
import NoteList from './NoteList'

function NoteBody({ notes, addNote, deleteNote }) {
  return (
    <div className='note-app__body'>
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      {
        (notes == 0 
        ? <p className='notes-list__empty-message'>Tidak ada catatan</p> 
        : <NoteList notes={notes} deleteNote={deleteNote} />
        )
      }
    </div>
  )
}

export default NoteBody