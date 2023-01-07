import React, { VFC } from 'react';

import Header from '../header';
import placeholder from './placeholder.jpeg';
import styles from './projects.scss';
import routiner from './routiner.jpg';

type ProjectProps = {
  image: string;
  title: string;
  description?: string;
  link?: string;
  linkText?: string;
};

const Project: VFC<ProjectProps> = ({
  image,
  title,
  description,
  link = '',
  linkText = '',
}) => (
  <div className={styles.project}>
    <span className={styles.title}>{title}</span>
    <div className={styles['project-text']}>
      <h1>{title}</h1>
      <p>{description}</p>
      {link && <a href={link}>{linkText}</a>}
    </div>
    <img className={styles['project-image']} src={image}></img>
  </div>
);

const Projects = () => (
  <>
    <Header />
    <main className={styles.projects}>
      <Project
        image={routiner}
        title="RoutineR"
        description="Android app for keeping track of routines."
        link="https://github.com/EwanMcA/RoutineR"
        linkText="GitHub"
      />
      <Project
        image={placeholder}
        title="placeholder"
        description="Beautiful autumnal forest."
      />
      <Project image={placeholder} title="placeholder" />
      <Project image={placeholder} title="placeholder" />
      <Project image={placeholder} title="placeholder" />
    </main>
  </>
);

export default Projects;
