import React, { useState } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';

export const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email && email.indexOf('@') > -1) {
            onValidated({
                EMAIL: email,
            });
            setSubscribed(true);
        }
    };

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                    <div className='news-sus'>
                    <div className='news-sus-titulo'>
                        <h3>Subscribe to the newsletter</h3>
                        </div>
                        <div className='news-sus-text'>
                            {status === 'sending' && <Alert className="custom-alert">Sending...</Alert>}
                            {status === 'error' && <Alert variant="danger" className="custom-alert">{message}</Alert>}
                            {subscribed && (
                                <Alert variant="success" className="custom-alert subscribed-message">
                                    Successfully subscribed!
                                </Alert>
                            )}
                            </div>
                            </div>
                    </Col>

                    <Col className="news-btx" md={6} xl={7}>
                        {!subscribed && (
                            <form
                                onSubmit={handleSubscribe}
                                action={`https://app.us13.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&amp;id=${process.env.REACT_APP_MAILCHIMP_ID}`}
                                method="post"
                                id="mc-embedded-subscribe-form"
                                name="mc-embedded-subscribe-form"
                                className="validate"
                                target="_blank"
                            >
                                <div className="new-email-bx">
                                    <input       
                                        value={email}
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email Address"
                                    />                               
                                        <button type="submit">Subscribe</button>                                     
                                </div>
                            </form>
                        )}
                    </Col>
                </Row>
            </div>
        </Col>
    );
};
