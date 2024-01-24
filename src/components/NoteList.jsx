
import React from 'react'
import NoteInputBody from './NoteInputBody';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete }) {
  return (
    <div className='notes-list'>
      {
        notes.map((note) => (
          <NoteItem
            key={note.id}
            title={note.title}
            content={note.content}
            onDelete={onDelete}
            {...note}
          />
        ))
      }
    </div>
  )
}

export default NoteList;