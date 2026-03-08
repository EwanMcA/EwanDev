import React from 'react';

import styles from './about.scss';
import Terminal from '../terminal';

const About: React.VFC = () => (
  <main className={styles.about} id="about">
    <section className={styles['terminal-container']}>
      <Terminal />
    </section>
  </main>
);

export default About;
