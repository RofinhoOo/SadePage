 import { Container, Row, Col } from 'react-bootstrap';
 import { MailchimpForm } from './MailchimpForm';
 import logo from '../assets/img/logo.jpg';
 import icon1 from '../assets/img/icon1.png';
 import icon2 from '../assets/img/icon2.png';
 import icon3 from '../assets/img/icon3.png';

 export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/s%C3%A4deleer%C3%A4st/"><img src={icon1} alt='' /></a>
                            <a href="https://www.facebook.com/sadelee.rast?locale=es_ES"><img src={icon2} alt='' /></a>
                            <a href="https://www.instagram.com/sadelee.rast/"><img src={icon3} alt='' /></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
 }