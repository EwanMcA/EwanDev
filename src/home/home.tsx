import React, { useEffect, VFC } from 'react';
import { gsap } from "gsap";

import { Link } from 'react-router-dom';

import inkGif from '../drip.gif';
import styles from './home.scss';
import ProfilePic from '../profileInk';

const Home: VFC = () => {
  useEffect(() => {
    gsap.to(".fade-element", {
      opacity: 0,
      duration: 5,
      ease: "power2.inOut",
      stagger: 0.01,
    });
  }, []);

  return (
    <main className={styles.homepage}>
      <div className={styles.images}>
        <ProfilePic />
        <img src={inkGif} alt="Ink drip" height={200} width={100} className={["fade-element", styles.drip].join(" ")}/>
      </div>
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
  )
};

export default Home;
