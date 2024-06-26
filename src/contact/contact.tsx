import React, { VFC } from 'react';

import styles from './contact.scss';

const Contact: VFC = () => (
  <main className={styles.contact}>
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="https://github.com/EwanMcA">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ewan-mcandrew-029867176">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:ewan.c.mcandrew@gmail.com">Email</a>
        </li>
      </ul>
    </nav>
  </main>
);

export default Contact;
