import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.png';

export const Banner = () => {
    return (
        <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm comunity manager`} <span className='wrap'>Säde-Lee Räst</span></h1>
                    <p>Poner cosas sobre ti</p>
                    <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <div className="banner-img">
                        <img src={headerImg} alt="Header Img" />
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
    )
}