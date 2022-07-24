import React, { useState, VFC } from 'react';

import TerminalText from '../terminal_text';
import Enter from './enter.svg';
import styles from './landing.scss';

const Landing: VFC = () => {
  const [step, setStep] = useState(0);

  return (
    <main className={styles['landing-main']}>
      <TerminalText text="whoami" setFinished={(): void => setStep(1)} />
      {step > 0 && <span className={styles.response}>Ewan McAndrew</span>}
      {step > 0 && (
        <TerminalText text="jobs" setFinished={(): void => setStep(2)} />
      )}
      {step > 1 && (
        <>
          <span className={styles.response}>
            [1] running &nbsp;&nbsp;- Senior Software Developer
          </span>
          <span className={styles.response}>
            [2] suspended - Platinum Recording Artist
          </span>
        </>
      )}
      {step > 1 && (
        <TerminalText
          text="history -E | grep software"
          setFinished={(): void => setStep(3)}
        />
      )}
      {step > 2 && (
        <>
          <span className={styles.response}>
            2016-2019 Software Development Engineer -{' '}
            <a href="https://www.csgi.com/">CSG International</a>
          </span>
          <span className={styles.response}>
            2019-2022 Software Developer -{' '}
            <a href="https://www.mintel.com">Mintel</a>
          </span>
        </>
      )}
      {step > 2 && (
        <TerminalText
          text="head ~/ewan/about.txt"
          setFinished={(): void => setStep(4)}
        />
      )}
      {step > 3 && (
        <>
          <p className={styles.response}>
            Hailing from Brisbane Australia, I studied physics and computer
            science at the{' '}
            <a href="https://about.uq.edu.au/">University of Queensland</a>. I
            went on to begin my career in Brisbane with a mix of web development
            in Angular and Java, as well as application development in c++.
          </p>
          <p className={styles.response}>
            In 2019 I moved half way around the world to the bustling metropolis
            of London, where I now reside. Here I&apos;ve been focusing on Web
            Development in Docker + Django + React, and gathering hobbies at an
            alarming rate.
          </p>
        </>
      )}
      <div className={styles['last-line']}>
        {step > 3 && (
          <TerminalText
            text="exec ~/ewan/project_site.sh"
            setFinished={(): void => setStep(5)}
            delay={5000}
            hang
          />
        )}
        {step > 4 && (
          <img src={Enter} className={styles.enter} alt="Continue" />
        )}
      </div>
    </main>
  );
};

export default Landing;
