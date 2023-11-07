import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xqkvjqye");
  const [showSendingMessage, setShowSendingMessage] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setShowSendingMessage(true); // Muestra el mensaje de "Sending..."

    const success = await handleSubmit(e);

    setTimeout(() => {
      setShowSendingMessage(false); // Oculta el mensaje de "Sending..." después de 3 segundos
      resetForm();
    }, 3000);

    if (success) {
      setShowSendingMessage(false); // Oculta el mensaje de "Sending..." si la operación fue exitosa
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="item-form">
          <Col size={12} md={6}>
            <TrackVisibility>
              <img id="contact-image" src={contactImg} alt="Contact Us" />
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <h2>Get in Touch</h2>
            <form onSubmit={handleFormSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <ValidationError prefix="Email" field="email" />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <ValidationError prefix="Message" field="message" />
                  <Col size={12} className="px-1">
                    {showSendingMessage ? (
                      <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                        Sending...
                      </p>
                    ) : state.succeeded ? (
                      <p className="success">Message sent!</p>
                    ) : (
                      <button type="submit" disabled={state.submitting}>
                        <span>Send</span>
                      </button>
                    )}
                  </Col>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
