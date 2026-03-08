import React from 'react';

import styles from './header.scss';
import profileInk from './profileInk.png';

const Header = () => (
  <header className={styles.header}>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
    <a href="#home" className={styles.profile}>
      <img src={profileInk} alt="Profile Picture" />
    </a>
  </header>
);

export default Header;
