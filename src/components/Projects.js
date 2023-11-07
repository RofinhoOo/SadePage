import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import travel1 from "../assets/img/travel1.mp4";
import travel2 from "../assets/img/travel2.mp4";
import travel3 from "../assets/img/travel3.mp4";
import food1 from "../assets/img/food1.mp4";
import food2 from "../assets/img/food2.mp4";
import food3 from "../assets/img/food3.mp4";
import other1 from "../assets/img/other1.mp4";
import other2 from "../assets/img/other2.mp4";
import other3 from "../assets/img/other3.mp4";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';




export const Projects = () => {

    const travels = [
        {
            videoUrl: travel1,
        },
        {
            videoUrl: travel2,
        },
        {
            videoUrl: travel3,
        }
    ];

    const foods = [

        {
         
            videoUrl: food1,
        },
        {
            
            videoUrl: food2,
        },
        {
          
            videoUrl: food3,
        }
    ];

    const others = [
        {
           
            videoUrl: other1,
        },
        {
           
            videoUrl: other2,
        },
        {
           
            videoUrl: other3,
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col className="project-col" size={12}>
                        <div className="project-cont">
                            <h2>Projects</h2>
                            <p>Explore this compilation of works that vividly reflect the passion I have for content creation. Each piece is a testament to my commitment to engaging storytelling and creative expression.</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Travel</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Food</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Other</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp">
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                travels.map((travel, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...travel}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            {
                                                foods.map((food, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...food}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row>
                                            {
                                                others.map((other, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...other}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
