import React, { useEffect } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import { useState } from 'react';

export const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && email.indexOf('@') > -1) {
            onValidated({
                EMAIL: email,
            });
        }
    };

    const clearFields = () => {
        setEmail('');
    };

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to the newsletter</h3>
                        {status === 'sending' && <Alert className="custom-alert">Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger" className="custom-alert">{message}</Alert>}
                        {status === 'success' && <Alert variant="success" className="custom-alert">{message}</Alert>}
                    </Col>

                    <Col md={6} xl={7}>
                        <form
                            onSubmit={handleSubmit}
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
                    </Col>
                </Row>
            </div>
        </Col>
    );
};
