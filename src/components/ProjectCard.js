import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, videoUrl }) => {
    return (
        <Col sm={4} md={4} lg={4} className="project-card"> {/* Ajusta el tamaño aquí */}
            <div className="project-card-inner">
                {videoUrl ? (
                    <video className="video" width="auto" height="auto" controls>
                        <source src={videoUrl} type="video/mp4" />
                        Tu navegador no soporta la reproducción de video.
                    </video>
                ) : null}
            </div>
        </Col>
    );
}

