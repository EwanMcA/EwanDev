import React, { useEffect, FC } from 'react';

import { gsap } from 'gsap';

import styles from './home.scss';
import inkGif from '../drip.gif';
import ProfilePic from '../profileInk';

const Home: FC = () => {
  useEffect(() => {
    gsap.to('.fade-element', {
      opacity: 0,
      duration: 5,
      ease: 'power2.inOut',
      stagger: 0.01,
    });
  }, []);

  return (
    <section className={styles.homepage} id="home">
      <div className={styles.images}>
        <ProfilePic />
        <img src={inkGif} alt="" height={200} width={100} className={['fade-element', styles.drip].join(' ')}/>
      </div>
      <nav className={styles.menu}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Home;
