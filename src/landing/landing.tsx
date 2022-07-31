import React, { useEffect, useRef, useState, VFC } from 'react';

import { Link } from 'react-router-dom';

import TerminalText from '../terminal_text';
import Enter from './enter';
import styles from './landing.scss';

type ResponseProps = {
  children: JSX.Element | JSX.Element[];
};

const Response = ({ children }: ResponseProps) => {
  const ref = useRef<HTMLDivElement>({} as HTMLDivElement);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollIntoView();
    }
  }, [ref]);

  return <div ref={ref}>{children}</div>;
};

const Landing: VFC = () => {
  const [step, setStep] = useState(0);
  const incStep = (): void => setStep((s) => s + 1);

  const COMMANDS = [
    {
      text: 'whoami',
      response: (
        <Response>
          <span className={styles.response}>Ewan McAndrew</span>
        </Response>
      ),
    },
    {
      text: 'jobs',
      response: (
        <Response>
          <span className={styles.response}>
            [1] running - Senior Software Developer
          </span>
          <span className={styles.response}>
            [2] suspended - Platinum Recording Artist
          </span>
        </Response>
      ),
    },
    {
      text: 'history -E | grep software',
      response: (
        <Response>
          <span className={styles.response}>
            2016-2019 Software Development Engineer -{' '}
            <a href="https://www.csgi.com/">CSG International</a>
          </span>
          <span className={styles.response}>
            2019-2022 Software Developer -{' '}
            <a href="https://www.mintel.com">Mintel</a>
          </span>
        </Response>
      ),
    },
    {
      text: 'head ~/ewan/about.txt',
      response: (
        <Response>
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
        </Response>
      ),
    },
    {
      text: 'exec ~/ewan/project_site.sh',
      delay: 5000,
      hang: true,
      wrap: true,
      response: (
        <Response>
          <Link to="/projects" className={styles.enter}>
            <Enter />
          </Link>
        </Response>
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
    <main className={styles.landing}>
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
