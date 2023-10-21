import { useState } from 'react';
import Container from './Container';
import { ColorContext } from './context/context';

export type ThemeProps = {
  color: string;
};

export default function Context() {
  const [color, setColor] = useState('red');

  return (
    <ColorContext.Provider value={{ color }}>
      <h1> Context Example</h1>
      <button onClick={() => setColor(color == 'red' ? 'blue' : 'red')}>
        toggle
      </button>
      <Container />
    </ColorContext.Provider>
  );
}

// Context ---- child1  ---conpB
//                   |_____ compA
