import React from 'react'
import NoteInput from './NoteInput'
import NoteList from './NoteList'

function NoteBody({ notes }) {
  return (
    <div className='note-app__body'>
      <NoteInput />
      <h1>Catatan Aktif</h1>
      <NoteList notes={notes} />
    </div>
  )
}

export default NoteBody