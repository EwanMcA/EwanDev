import React from 'react';

import styles from './about.scss';
import Terminal from '../terminal';

const About: React.FC = () => (
  <section className={styles.about} id="about">
    <section className={styles['terminal-container']}>
      <Terminal />
    </section>
  </section>
);

export default About;
