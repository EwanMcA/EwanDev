import React, { FC } from 'react';

import styles from './contact.scss';

const Contact: FC = () => (
  <section className={styles.contact} id="contact">
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
  </section>
);

export default Contact;
