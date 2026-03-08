import React from 'react';

import styles from './about.scss';
import Terminal from '../terminal';

const About: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      <section className={[styles['terminal-container'], styles.screen].join(' ')}>
        <Terminal />
      </section>
    </section>
  );
};

export default About;
