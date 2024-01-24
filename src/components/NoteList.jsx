
import React from 'react'
import NoteInputBody from './NoteInputBody';
import NoteItem from './NoteItem';

function NoteList({ notes }) {
  return (
    <div className='notes-list'>
      {
        notes.map((note) => (
          <NoteItem
            key={note.id}
            title={note.title}
            content={note.content}
            {...note}
          />
        ))
      }
    </div>
  )
}

export default NoteList;