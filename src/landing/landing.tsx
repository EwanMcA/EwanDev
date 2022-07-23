import React, { useState } from 'react';

import TerminalText from '../terminal_text';
import styles from './landing.scss';

const Landing = (): JSX.Element => {
  const [step, setStep] = useState(0);

  return (
    <main className={styles['landing-main']}>
      <TerminalText text="whoami" setFinished={() => setStep(1)}/>
      {step > 0 && (<span className={styles.response}>Ewan McAndrew</span>)}
      {step > 0 && (
        <TerminalText text="jobs" setFinished={() => setStep(2)}/>
      )}
      {step > 1 && (
        <>
          <span className={styles.response}>[1] running &nbsp;&nbsp;- Senior Software Developer</span>
          <span className={styles.response}>[2] suspended - Platinum Recording Artist</span>
        </>
      )}
      {step > 1 && (
        <TerminalText text="history -E | grep software" setFinished={() => setStep(3)}/>
      )}
      {step > 2 && (
        <>
          <span className={styles.response}>2016-2019 Software Development Engineer - <a href="https://www.csgi.com/">CSG International</a></span>
          <span className={styles.response}>2019-2022 Software Developer - <a href="https://www.mintel.com">Mintel</a></span>
        </>
      )}
      {step > 2 && (
        <TerminalText text="cat ~/ewan/about/skills.txt" setFinished={() => setStep(4)}/>
      )}
      {step > 3 && (
        <>
          <span className={styles.response}>Full Stack Web Development</span>
          <span className={styles.response}>React</span>
          <span className={styles.response}>Django</span>
        </>
      )}
    </main>
  );
};

export default Landing;
