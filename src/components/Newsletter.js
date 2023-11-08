import React, { useState, useEffect } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';

export const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState('');
    const [subscriptionStatus, setSubscriptionStatus] = useState(null);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email && email.indexOf('@') > -1) {
            onValidated({
                EMAIL: email,
            });
            setSubscriptionStatus('sending');

            // Simula un retraso para la demostración
            setTimeout(() => {
                setSubscriptionStatus('success');
            }, 7000);
        } else {
            setSubscriptionStatus('error');
        }
    };

    useEffect(() => {
        if (subscriptionStatus === 'success') {
            const timer = setTimeout(() => {
                setSubscriptionStatus(null); // Restablece el estado después de 5 segundos
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [subscriptionStatus]);

    const getAlertVariant = () => {
        if (subscriptionStatus === 'sending') {
            return 'success';
        } else if (subscriptionStatus === 'error') {
            return 'danger';
        }
        return 'success';
    };

    return (
        <Col lg={12} md={12} xl={12} sm={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={6} md={6} xl={6} sm={6}>
                        <div className='news-sus'>
                            {subscriptionStatus !== 'success' && (
                                <div className='news-sus-titulo'>
                                    <h3>Subscribe to the newsletter</h3>
                                </div>
                            )}
                            <div className='news-sus-text'>
                                {subscriptionStatus === 'sending' && (
                                    <Alert className="custom-alert sending-message">
                                        Sending...
                                    </Alert>
                                )}
                                {subscriptionStatus === 'error' && (
                                    <Alert variant="danger" className="custom-alert">
                                        {message}
                                    </Alert>
                                )}
                                {subscriptionStatus === 'success' && (
                                    <Alert variant={getAlertVariant()} className="custom-alert subscribed-message">
                                        Successfully subscribed!
                                    </Alert>
                                )}
                            </div>
                        </div>
                    </Col>


                    <Col className="news-btx" lg={6} md={6} xl={6} sm={6}>
                        {subscriptionStatus !== 'success' && (
                            <form
                                onSubmit={handleSubscribe}
                                action={`https://app.us13.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&amp;id=${process.env.REACT_APP_MAILCHIMP_ID}`}
                                method="post"
                                id="mc-embedded-subscribe-form"
                                name="mc-embedded-subscribe-form"
                                className="validate"
                                target="_blank"
                            >
                                {subscriptionStatus !== 'sending' && (
                                    <div className="new-email-bx">
                                        <input
                                            value={email}
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email Address"
                                            required
                                        />
                                        <button type="submit">
                                            <span>{subscriptionStatus === 'sending' ? "Sending..." : "Subscribe"}</span>
                                        </button>
                                    </div>
                                )}
                            </form>
                        )}
                    </Col>
                </Row>
            </div>
        </Col>
    );
};
