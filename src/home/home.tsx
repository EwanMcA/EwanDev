import React, { useEffect, FC } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './home.scss';
import ProfilePic from '../profileInk';

gsap.registerPlugin(ScrollTrigger);

const Home: FC = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // General fade for elements
      gsap.fromTo(
        '.fade-element',
        {
          opacity: 1,
        },
        {
          opacity: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: '#home',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        },
      );

      // Specific top-to-bottom mask fade for profile illustration
      gsap.to(`.${styles.profile}`, {
        webkitMaskPosition: '0% 0%',
        maskPosition: '0% 0%',
        scrollTrigger: {
          trigger: '#home',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  // TODO: add back 
  //<img
    //src={inkGif}
    //alt=""
    //height={200}
    //width={100}
    //className={['fade-element', styles.drip].join(' ')}
  ///>

  return (
    <section className={styles.homepage} id="home">
      <div className={styles.images}>
        <ProfilePic className={[styles.profile, 'fade-element'].join(' ')} />
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
