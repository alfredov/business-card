import React, { Component } from 'react';
import './styles/App.css';
import Form from './components/Form';
import BusinessCard from './components/BusinessCard';
import { PageContext } from './utils';

class App extends Component {
  
  onChangeInputValue = (value, name) => {
    this.setState({
      formSubmitted: false,
      [name]: value
    });
  }

  formIsNotEmpty = () => {
    const {
      name,
      job,
      phone,
      email,
      address
    } = this.state;
    return (name.length && job.length && email.length && address.length && phone.length);
  }

  static initialState = {
    name: '',
    job: '',
    prefix: '34',
    phone: '',
    email: '',
    website: 'www.cabify.com',
    address: '',
    formSubmitting: false,
    formSubmitted: false,
  }

  state = {
    ...App.initialState,
    errors: {},
    onChangeInput: this.onChangeInputValue,
    formIsNotEmpty: this.formIsNotEmpty,
  }

  clearForm = () => {
    this.setState(App.initialState);
  }

  submitFormHandler = () => {
    this.setState({ formSubmitting: true });
    setTimeout(() => {
      this.setState({ formSubmitting: false, formSubmitted: true });
    }, 2000);
  }

  render() {
    return (
      <PageContext.Provider value={this.state}>
        <div className="mainWrapper row">
          <BusinessCard />
          <article className="builder col col6">
            <Form onSubmit={this.submitFormHandler} />
          </article>
        </div>
      </PageContext.Provider>
    );
  }
}

export default App;
