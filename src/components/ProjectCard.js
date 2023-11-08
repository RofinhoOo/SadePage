import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, videoUrl }) => {
    return (
        <Col sm={4} md={4} lg={4} className="project-card">
            <div className="project-card-inner">
                {videoUrl ? (
                    <div className="video-container">
                        <video className="video" controls playsinline crossorigin="anonymous">
                            <source src={videoUrl} type="video/mp4" />
                           
                        </video>
                        <div className="logo"></div>
                    </div>
                ) : null}
            </div>
        </Col>
    );
}
