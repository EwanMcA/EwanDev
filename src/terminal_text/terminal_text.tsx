import React, { VFC, useEffect, useReducer, useState } from 'react';

import styles from './terminal_text.scss';

type TerminalTextProps = {
  text: string;
  animate: boolean;
  onAnimationComplete: () => void;
  delay?: number;
  hang?: boolean;
};

type TerminalTextState = {
  textIdx: number;
  started: boolean;
  end: number;
};

const reducer = (
  state: TerminalTextState,
  action: { type: string; onFinish?: () => void }
): TerminalTextState => {
  switch (action.type) {
    case 'end':
      return { ...state, textIdx: state.end };
    case 'tick':
      if (state.textIdx < state.end) {
        return state.started ? { ...state, textIdx: state.textIdx + 1 } : state;
      }
      if (action.onFinish) {
        action.onFinish();
      }
      return state;
    case 'start':
      return { ...state, started: true };
    default:
      return state;
  }
};

const TerminalText: VFC<TerminalTextProps> = ({
  text,
  animate,
  onAnimationComplete,
  delay = 2000,
  hang = false,
}) => {
  const [underscoreHidden, setUnderscoreHidden] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    textIdx: 0,
    started: false,
    end: text.length,
  });

  useEffect(() => {
    const underscoreInterval = setInterval(() => {
      setUnderscoreHidden((uh) => !uh);
    }, 400);

    const textInterval = setInterval(() => {
      dispatch({
        type: 'tick',
        onFinish: () => {
          if (!hang) {
            setUnderscoreHidden(true);
            clearInterval(underscoreInterval);
          }
          clearInterval(textInterval);
          setTimeout(() => onAnimationComplete(), 100);
        },
      });
    }, 100);

    if (!animate) {
      clearInterval(underscoreInterval);
      clearInterval(textInterval);
      dispatch({ type: 'end' });
    } else if (!state.started) {
      setTimeout(() => dispatch({ type: 'start' }), delay);
    }

    return () => {
      clearInterval(underscoreInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className={styles.terminal_text}>
      <span className={styles.prefix}>&gt;&gt; </span>
      <span>{text.substring(0, state.textIdx)}</span>
      <span style={{ visibility: underscoreHidden ? 'hidden' : 'visible' }}>
        _
      </span>
    </div>
  );
};

export default TerminalText;
