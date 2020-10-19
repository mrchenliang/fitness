import React, { Component } from 'react'
import axios from 'axios'
import validator from 'email-validator'
import addToMailchimp from 'gatsby-plugin-mailchimp'


// Directions here: https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175

const formUrl = 'https://script.google.com/macros/s/YourKeyHere/exec'
const mailchimpUrl = 'https://REGION.api.mailchimp.com/3.0'
const ThankYou = () => <div className='fw4 lh-title mt0 avenir'>Thank You!</div>

class ContactForm extends Component {
  render() {
    const showEmailError = this.emailNode && !this.props.emailIsValid
    return (
      <form
        onChange={this.props.onChange}
        onSubmit={this.props.onSubmit}
        className='flex justify-around items-center'
      >
        <label className='mr3 avenir mt0 dark-gray'>
          Your Email Address
        </label>

          <label className='mr3'>
            <input
              type='text'
              name='email'
              placeholder='email'
              className={`${showEmailError ? 'pv2 ba b--light-red' : ''}`}
              ref={node => (this.emailNode = node)}
            />
        </label>

        <button className='f6 pa2 avenir dim' disabled={!this.props.emailIsValid}>
          Submit
        </button>
      </form>
    )
  }
}

class App extends Component {
  state = {
    name: '',
    email: '',
    emailIsValid: false,
    submitted: false
  }

  validateEmail = () => {
    this.setState({emailIsValid: validator.validate(this.state.email)})
  }

  updateValues = (e) => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
    this.validateEmail()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, email } = this.state

    axios({
      method: 'get',
      url: `${formUrl}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`
    })

    const mc = addToMailchimp(email)

    this.setState({submitted: true})
  }

  render() {
    const { emailIsValid, submitted } = this.state

    return (
      <div className='center'>
        {submitted
          ? <ThankYou />
          : <ContactForm
              onChange={this.updateValues}
              onSubmit={this.handleSubmit}
              emailIsValid={emailIsValid}
            />
        }
      </div>
    )
  }
}