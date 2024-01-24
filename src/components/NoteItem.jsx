
import React from 'react'
import NoteInputBody from './NoteInputBody';

function NoteItem({ title, createdAt, body }) {
  return (
    <div className='note-item'>
      <h3 className='note-item__title'>{title}</h3>
      <p className='note-item__date'>{createdAt}</p>
      <p className='note-item__content'>{body}</p>
    </div>
  )
}

export default NoteItem;