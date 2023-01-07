import React, { VFC } from 'react';

import { Link } from 'react-router-dom';

import profilePic from '../header/profileInk.png';
import styles from './home.scss';

const Home: VFC = () => (
  <main className={styles.homepage}>
    <img src={profilePic} />
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="projects">Projects</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </main>
);

export default Home;
