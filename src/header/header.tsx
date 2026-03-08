import React from 'react';

import styles from './header.scss';
import profileInk from './profileInk.png';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
    <a href="#home" className={styles.profile} aria-label="Back to home">
      <img src={profileInk} alt="Ewan McAndrew" />
    </a>
  </header>
);

export default Header;
