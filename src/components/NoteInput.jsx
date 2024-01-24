
import React from 'react'
import NoteInputBody from './NoteInputBody';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(e) {
    this.setState({ title: e.target.value });
  }

  onBodyChangeHandler(e) {
    this.setState({ body: e.target.value });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addNote({
      title: this.state.title,
      body: this.state.body,
    })
  }

  render () {
    return (
      <div className='note-input'>
        <h1 className='note-input__title'>Buat Catatan</h1>
        <form className='note-input__body' onSubmit={this.onSubmitHandler}>
          <input type='text' placeholder='Title' value={this.state.title} onChange={this.onTitleChangeHandler} />
          <textarea placeholder='Write your note here...' value={this.state.body} onChange={this.onBodyChangeHandler}></textarea>
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default NoteInput;