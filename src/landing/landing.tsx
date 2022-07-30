import React, { useEffect, useState, VFC } from 'react';

import TerminalText from '../terminal_text';
import Enter from './enter';
import styles from './landing.scss';

const Landing: VFC = () => {
  const [step, setStep] = useState(0);
  const incStep = (): void => setStep((s) => s + 1);

  const COMMANDS = [
    {
      text: 'whoami',
      response: <span className={styles.response}>Ewan McAndrew</span>,
    },
    {
      text: 'jobs',
      response: (
        <>
          <span className={styles.response}>
            [1] running - Senior Software Developer
          </span>
          <span className={styles.response}>
            [2] suspended - Platinum Recording Artist
          </span>
        </>
      ),
    },
    {
      text: 'history -E | grep software',
      response: (
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
      ),
    },
    {
      text: 'head ~/ewan/about.txt',
      response: (
        <>
          <p className={styles.response}>
            Hailing from Brisbane Australia, I studied physics and computer
            science at the&nbsp;
            <a href="https://about.uq.edu.au/">University of Queensland</a>. I
            began my career with a mix of web development in Angular and Java,
            as well as application development in c++.
          </p>
          <p className={styles.response}>
            In 2019 I moved half way around the world to the bustling metropolis
            of London, where I now reside. Here I&apos;ve been focusing on Web
            Development in Docker + Django + React, and gathering hobbies at an
            alarming rate.
          </p>
        </>
      ),
    },
    {
      text: 'exec ~/ewan/project_site.sh',
      delay: 5000,
      hang: true,
      wrap: true,
      response: (
        <button className={styles.enter}>
          <Enter />
        </button>
      ),
    },
  ];

  useEffect(() => {
    const handleClick = (): void => setStep((s) => s + 1);
    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <main className={styles['landing-main']}>
      {COMMANDS.map((cmd, ix) => {
        if (step >= ix) {
          const commandComponent = (
            <TerminalText
              text={cmd.text}
              animate={step == ix}
              onAnimationComplete={incStep}
              hang={cmd.hang}
              delay={cmd.delay}
            />
          );
          const responseComponent = step > ix ? cmd.response : <></>;

          return (
            <div className={cmd.wrap ? styles.inline : ''}>
              {commandComponent}
              {responseComponent}
            </div>
          );
        }
        return <></>;
      })}
    </main>
  );
};

export default Landing;
