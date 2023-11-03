import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
  const [state, handleSubmit] = useForm("xqkvjqye");

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="item-form">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  id="contact-image"
                  src={contactImg}
                  alt="Contact Us"
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email Address"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          id="message"
                          name="message"
                          placeholder="Message"
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                        />
                        <button type="submit" disabled={state.submitting}>
                          <span>{state.submitting ? "Sending..." : "Send"}</span>
                        </button>
                      </Col>
                      {state.succeeded && (
                        <Col>
                          <p className="success">Message sent successfully</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
