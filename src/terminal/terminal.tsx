import React, { useEffect, useRef, useState } from 'react';

import styles from './terminal.scss';
import TerminalText from '../terminal_text';

type ResponseProps = {
  children: JSX.Element | JSX.Element[];
};

const Response = ({ children }: ResponseProps) => {
  const ref = useRef<HTMLDivElement>({} as HTMLDivElement);

  useEffect(() => {
    if (ref && ref.current) {
      //ref.current.scrollIntoView();
    }
  }, [ref]);

  return <div ref={ref}>{children}</div>;
};

const Terminal = () => {
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
            2019-cont. Software Developer -{' '}
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
            I moved to London in 2019 from Brisbane Australia, where I studied
            physics and computer science at the&nbsp;
            <a href="https://about.uq.edu.au/">University of Queensland</a>.
          </p>
          <p className={styles.response}>
            Here I&apos;ve been pursuing my passion for software development,
            and gathering hobbies at an alarming rate.
          </p>
        </Response>
      ),
    },
  ];

  return (
    <div className={styles.terminal}>
      {COMMANDS.map((cmd, ix) => {
        if (step >= ix) {
          const commandComponent = (
            <TerminalText
              text={cmd.text}
              animate={step == ix}
              onAnimationComplete={incStep}
            />
          );
          const responseComponent = step > ix ? cmd.response : <></>;

          return (
            <div key={cmd.text}>
              {commandComponent}
              {responseComponent}
            </div>
          );
        }
        return <></>;
      })}
    </div>
  );
};

export default Terminal;
