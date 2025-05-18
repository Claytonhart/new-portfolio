import React from "react";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
    const { title, tech, description, image, webLink, gitLink } = project;
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <h3 className={styles.tech}>{tech}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.buttonContainer}>
                    <a
                        target="_blank"
                        name="web-link"
                        rel="noopener noreferrer"
                        href={webLink}
                    >
                        Website
                    </a>
                    <a
                        target="_blank"
                        name="github-link"
                        rel="noopener noreferrer"
                        href={gitLink}
                    >
                        Github
                    </a>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <a
                    target="_blank"
                    name="web-link-image"
                    rel="noopener noreferrer"
                    href={webLink}
                >
                    <img
                        className={styles.image}
                        src={image}
                        alt="playlist-converter"
                    />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
