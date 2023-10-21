import { useEffect, useRef, useState } from 'react';

export default () => {
  // ** persisting the values between re-renders
  let valRef = useRef(0);
  //** Direct reference to the DOM input element */
  let inputRef = useRef(null);

  // inputRef?.current.value = 'anil';
  useEffect(() => {
    inputRef.current.value = 'anil';
  }, []);

  const [val, setVal] = useState<string>('');

  return (
    <div>
      <h1>This is a email</h1>
      <input
        type="email"
        ref={inputRef}
        onChange={(e) => {
          setVal(e.target.value);
          valRef.current += 1;
          console.log(valRef);
        }}
      ></input>
      {val}
    </div>
  );
};
