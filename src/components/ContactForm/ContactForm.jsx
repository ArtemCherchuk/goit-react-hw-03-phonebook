import React, { Component } from 'react';

import css from 'components/ContactForm/ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onFormSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      number: Number.parseFloat(this.state.number),
    };

    this.props.onAddContact(newUser);
  };

  onChangeInput = e => {
    const value = e.target.value;
    const nameInput = e.target.name;
    this.setState({
      [nameInput]: value,
    });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.onFormSubmit}>
        <label className={css.labelForm}>Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          className={css.inputForm}
          value={this.state.name}
          onChange={this.onChangeInput}
        />
        <label className={css.labelForm}>Number</label>
        <input
          type="tel"
          name="number"
          required
          placeholder="Your number"
          pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
          className={css.inputForm}
          value={this.state.number}
          onChange={this.onChangeInput}
        />
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </form>
    );
  }
}
