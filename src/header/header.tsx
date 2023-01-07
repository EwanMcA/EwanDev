import React from 'react';
import { Link } from "react-router-dom";

import profileInk from './profileInk.png';
import styles from './header.scss';

const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      Home
    </Link>
    <Link to="/about">
      About
    </Link>
    <Link to="/projects">
      Projects
    </Link>
    <Link to="/" className={styles.profile}>
      <img src={profileInk} alt="Profile Picture" />
    </Link>
  </header>
);

export default Header;
