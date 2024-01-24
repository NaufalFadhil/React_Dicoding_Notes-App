
import React from 'react'

class NoteInputBody extends React.Component {
  render () {
    return (
      <form className='note-input'>
        <input type='text' placeholder='Title' />
        <textarea placeholder='Write your note here...'></textarea>
        <button type='submit'>Add</button>
      </form>
    )
  }
}

export default NoteInputBody;