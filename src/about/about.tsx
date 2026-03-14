import React from 'react';

import styles from './about.scss';
import Terminal from '../terminal';

const About: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.screen_outer}>
        <section className={[styles['terminal-container'], styles.screen].join(' ')}>
          <Terminal />
        </section>
      </div>
    </section>
  );
};

export default About;
