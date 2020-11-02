
import React, { Component } from "react";
import './subscribe.styles.css';
import Button from 'react-bootstrap/Button';
import MailchimpSubscribe from "react-mailchimp-subscribe"


const CustomForm = ({ status, message, onValidated }) => {
    let email, firstName, lastName;
    const submit = () =>
      email &&
      firstName &&
      lastName &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        FNAME: firstName.value,
        LNAME: lastName.value
      });
    return (
        <div>
            <div className ="subscribe-text">
                {status === "sending" &&  <span className = "sending">sending...</span>}
                {status === "error" &&  <span className = "error" dangerouslySetInnerHTML={{ __html: message }} />}
                {status === "success" &&  <span className = "success" dangerouslySetInnerHTML={{ __html: message }} />}
            </div>
            <div className = "subscribe-form">
                    <input className = "subscribe-input" ref={node => (firstName = node)} type="text" placeholder="first name"/>
                    <input className = "subscribe-input" ref={node => (lastName = node)} type="text" placeholder="last name"/>
                    <input className = "subscribe-input subscribe-email" ref={node => (email = node)} type="email" placeholder="fitness@2020.com"/>
                <Button className = "subscribe-button" variant="light" onClick={submit}>Submit</Button>
            </div>
        </div>
    );
  };
  
  class Subscribe extends Component {
    render() {
      const url =
        "https://fitbritfitness.us2.list-manage.com/subscribe/post?u=de9c0cfd3d60b312c7e17d727&amp;id=fb35258607";
      return (
        <div className = 'subscribe-component'>
        <div className = 'subscribe-intro'>Subscribe</div>
        <div className = 'subscribe-paragraph'>Subscribe to my monthly fitness tips & tricks and challenges!</div>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </div>
      );
    }
  }

export default Subscribe;
