
import React from 'react';
import './subscribe.styles.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"


{/* <form action="https://fitbritfitness.us2.list-manage.com/subscribe/post?u=de9c0cfd3d60b312c7e17d727&amp;id=fb35258607" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate></form> */}


const Subscribe = () => {
    const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

    const SimpleForm = () => <MailchimpSubscribe url={url}/>

    return (
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
            <div>
                <SimpleForm onSubmitted={formData => subscribe(formData)} />
                {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
            </div>
            )}
        />
    );
};

export default Subscribe;
