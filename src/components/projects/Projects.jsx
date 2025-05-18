import React from "react";
import styles from "./Projects.module.css";

import roadmapimage from "../../images/roadmap-small.jpg";
import playlistconverterimage from "../../images/music-playlist-converter-small.jpg";
import landingimage from "../../images/landing-page-small.jpg";
import booksearchimage from "../../images/book-search-small.jpg";
import cryptogramimage from "../../images/cryptogram-small.jpg";
import cryptocurrencyimage from "../../images/cryptocurrency-small.jpg";

import ProjectCard from "./projectcard/ProjectCard";

const Projects = ({ projectRef }) => {
    const p1 = {
        title: "Roadmap",
        tech: "React, Redux, Node.js, Express, MongoDB, Styled Components, React Router, HTML5, CSS3",
        description: `Roadmap is a full stack project management tool inspired by Trello, Jira, Asana, and more. Users can sign up, create projects with tasks, add other users to their projects, and delete those projects.`,
        image: roadmapimage,
        webLink: "https://devroadmap.herokuapp.com/",
        gitLink: "https://github.com/Claytonhart/roadmap",
    };

    const p2 = {
        title: "Playlist Converter",
        tech: "React, React Router, HTML5, SASS, CSS3",
        description: `This Playlist Converter was a project initially designed to convert my
    music library from Youtube to Spotify. It grew to accommodate four platforms which
    each have a public api with client side authentication and authorization. I'd like
    to include services such as Google Music, Soundcloud, Amazon Music, etc. However, 
    each of these platforms seemed to either only allow server side authentication, or
    did not have a publicly accessible api at the moment (Soundcloud).`,
        image: playlistconverterimage,
        webLink: "https://claytonhart.github.io/music-playlist-converter/",
        gitLink: "https://github.com/Claytonhart/music-playlist-converter",
    };

    const p3 = {
        title: "Cryptocurrency Dashboard",
        tech: "React, HTML5, CSS3, SASS, Highcharts",
        description: `Cryptocurrency Dashboard is an example of a single page dashboard 
    which allows users to search a database of over 3,000 cryptocurrencies and see their 
    price history and most recent price snapshots.`,
        image: cryptocurrencyimage,
        webLink: "https://claytonhart.github.io/cryptocurrency-dashboard/",
        gitLink: "https://github.com/Claytonhart/cryptocurrency-dashboard/",
    };

    const p4 = {
        title: "Simple Landing Page",
        tech: "React, HTML5, CSS3, SASS, SCSS",
        description: `This project was an anonymized recreation of the avenueliving.ca home page. It was my first project using Sass, with a focus on clean components and reusable CSS.`,
        image: landingimage,
        webLink: "https://claytonhart.github.io/simple-landing-page/",
        gitLink: "https://github.com/Claytonhart/simple-landing-page/",
    };

    // const p3 = {
    //   title: "Book Search",
    //   tech: "React, React Router, HTML5, CSS3",
    //   description: `Book Search pulls from the Google Books api to allow users to search for
    //   any book by title. Unfortunately, the api is rather limited and does not allow much
    //   customization of search parameters, however, the intent of the project was to practice
    //   flexbox and responsive design in the React ecosystem.`,
    //   image: booksearchimage,
    //   webLink: "https://claytonhart.github.io/book-search/",
    //   gitLink: "https://github.com/Claytonhart/book-search"
    // };

    // const p4 = {
    //   title: "Cryptograms",
    //   tech: "React, HTML5, CSS3",
    //   description: `This simple Cryptogram creator encrypts a random short quote with a
    //   substitution cipher. Each letter is linked to all instances of the same letter, so
    //   users do not have to search for each instance of a letter.`,
    //   image: cryptogramimage,
    //   webLink: "https://claytonhart.github.io/cryptograms/",
    //   gitLink: "https://github.com/Claytonhart/cryptograms/"
    // };

    return (
        <section className={styles.projects} id="projects" ref={projectRef}>
            <h1 className={styles.projectsTitle}>Projects</h1>
            <ProjectCard project={p1} />
            <ProjectCard project={p2} />
            <ProjectCard project={p3} />
            <ProjectCard project={p4} />
        </section>
    );
};

export default Projects;
