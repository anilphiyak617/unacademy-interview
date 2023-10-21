import { useCallback, useState } from 'react';

export default function Throttling() {
  const [state, setState] = useState('');

  const createThrottle = (callback, delay) => {
    let prevTime = 0;
    let prevState = null;
    let timerId = null;

    return function (...args) {
      const curTime = Date.now();
      // clearing previoys scheduled timeout
      clearTimeout(timerId);
      // ** returning if delay time interval has not passed
      if (curTime - prevTime <= delay) {
        prevState = [...args];
        timerId = setTimeout(() => {
          callback(...prevState);
        }, delay);
        return;
      }

      prevTime = curTime;
      clearTimeout(timerId);
      callback(...args);
    };
  };

  const inputCallback = (e) => {
    // setState(e.target.value);
    console.log('callback-called');
    console.log(e.target.value);
  };

  // const throttledInput = useCallback(() => {
  //   return createThrottle(inputCallback, 5000);
  // }, []);

  return (
    <div>
      <h1>Throttling</h1>
      <input onChange={createThrottle(inputCallback, 5000)}></input>
      <div>{state}</div>
    </div>
  );
}
