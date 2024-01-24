
import React from 'react'
import NoteInputBody from './NoteInputBody';
import { showFormattedDate } from '../utils';

function NoteItem({ title, createdAt, body }) {
  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <h3 className='note-item__title'>{title}</h3>
        <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
        <p className='note-item__body'>{body}</p>
      </div>
    </div>
  )
}

export default NoteItem;