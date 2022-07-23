import React, { VFC, useEffect, useReducer, useState } from 'react';

import styles from './terminal_text.scss';

type TerminalTextProps = {
  text: string;
  setFinished: () => void;
  delay?: number;
};

const reducer = (state: {textIdx: number, started: boolean, end: number}, action: { type: string, onFinish?: any }) => {
  switch(action.type) {
    case "tick":
      if (state.textIdx < state.end) {
        return state.started ? { ...state, textIdx: state.textIdx + 1 } : state;
      }
      action.onFinish();
      return state;
    case "start":
      return { ...state, started: true };
    default:
      return state;
  }
};

const TerminalText: VFC<TerminalTextProps> = ({text, setFinished, delay=2000}) => {
  const [underscoreHidden, setUnderscoreHidden] = useState(false);
  const [state, dispatch] = useReducer(
    reducer, { textIdx: 0, started: false, end: text.length }
  );

  useEffect(() => {
    if (!state.started) {
      setTimeout(() => dispatch({ type: "start" }), delay);
    }

    const underscoreInterval = setInterval(() => {
      setUnderscoreHidden(uh => !uh);
    }, 400);

    const textInterval = setInterval(() => {
      dispatch({
        type: "tick",
        onFinish: () => {
          clearInterval(underscoreInterval);
          clearInterval(textInterval);
          setTimeout(() => setFinished(), 100);
        }
      });
    }, 100);

    return () => {
      clearInterval(underscoreInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className={styles.terminal_text}>
      <span>&gt;&gt; {text.substring(0, state.textIdx)}</span>
      <span style={{visibility: underscoreHidden ? 'hidden' : 'visible'}}>_</span>
    </div>
  );
};

export default TerminalText;
