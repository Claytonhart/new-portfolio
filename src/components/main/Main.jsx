import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

import styles from "./Main.module.css";

const Main = ({ projectRef }) => {
    const scrollToElement = () => {
        projectRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={styles.page}>
            <section className={styles.container}>
                <h1 className={styles.name}>Clayton Hart</h1>
                <h3 className={styles.description}>Front End Developer</h3>
                <div className={styles.socialLinks}>
                    <a
                        name="github-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Claytonhart"
                    >
                        <Github size={24} className={styles.icon} />
                    </a>
                    <a
                        name="linkedin-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/clayton-hart-3a50a716b/"
                    >
                        <Linkedin size={24} className={styles.icon} />
                    </a>
                    <a
                        name="email-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:claytonhart345@gmail.com"
                    >
                        <Mail size={24} className={styles.icon} />
                    </a>
                </div>
                <div className={styles.downArrow}>
                    <a onClick={scrollToElement}>
                        <ChevronDown size={48} className={styles.iconPulse} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Main;
