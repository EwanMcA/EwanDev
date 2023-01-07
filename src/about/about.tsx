import React from 'react';

import Header from '../header';
import Terminal from '../terminal';
import styles from './about.scss';

const About: React.VFC = () => (
  <>
    <Header />
    <main className={styles.about}>
      <section className={styles['terminal-container']}>
        <Terminal />
      </section>
    </main>
  </>
);

export default About;
