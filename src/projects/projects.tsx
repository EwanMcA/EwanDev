import React from 'react';

import { useMediaQuery } from 'react-responsive';

import battlesheet from './battlesheet.png';
import placeholder from './placeholder.jpeg';
import styles from './projects.scss';
import routiner from './routiner.jpg';

type ProjectProps = {
  images: string[];
  title: string;
  description?: string;
  link?: string;
  linkText?: string;
};

const Project = ({
  images,
  title,
  description,
  link = '',
  linkText = '',
} : ProjectProps) => {
  const mobile = useMediaQuery({ query: '(max-width: 1280px)' });

  return (
    <div className={styles.project}>
      <span className={styles.title}>{title}</span>
      <div className={styles['project-text']}>
        <h1>{title}</h1>
        <p>{description}</p>
        {link && <a href={link}>{linkText}</a>}
      </div>
      {mobile ? (
        <img className={styles['project-image']} src={images[0]} />
      ) : (
        images.map((image, idx) => (
          <img key={idx} className={styles['project-image']} src={image} />
        ))
      )}
    </div>
  );
};

const Projects = () => (
  <main className={styles.projects}>
    <Project
      images={[routiner]}
      title="RoutineR"
      description="Android app for keeping track of routines."
      link="https://github.com/EwanMcA/RoutineR"
      linkText="GitHub"
    />
    <Project
      images={[battlesheet]}
      title="Battlesheet"
      description="Web app to support tabletop war games."
    />
    <Project images={[placeholder]} title="placeholder" />
    <Project images={[placeholder]} title="placeholder" />
    <Project images={[placeholder]} title="placeholder" />
  </main>
);

export default Projects;
