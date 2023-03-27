import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Modal from 'react-bootstrap/Modal';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { CustomForm } from '../subscribe/subscribe.component';
import './modal.styles.css';

function EmailModal() {
  const [cookies, setCookie] = useCookies(['subscribed']);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!cookies.subscribed) {
        setShow(true);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [cookies.subscribed]);

  const handleClose = () => setShow(false);

  const url = "https://fitbritfitness.us2.list-manage.com/subscribe/post?u=de9c0cfd3d60b312c7e17d727&amp;id=fb35258607";
  return (
      <Modal show={show} dialogClassName="subscribe-modal" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Subscribe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Subscribe to receive a FREE workout trial, receive updates on promotions, new services offered, and the latest health and fitness information!
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={formData => {
                  subscribe(formData)
                  setCookie('subscribed', true, { path: '/' });
                  handleClose()
                }}
              />
            )}
          />        
          </Modal.Body>
      </Modal>
  );
}

export default EmailModal;
