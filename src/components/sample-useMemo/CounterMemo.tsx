import { useEffect, useMemo, useRef, useState } from 'react';

export default (props: {}) => {
  const heavyFunction = () => {
    for (let i = 0; i < 1e9; i++) {}
    return 1000;
  };
  const cachedValue = useMemo(heavyFunction, []);

  const [value, setValue] = useState(1);

  let timeRef = useRef(Date.now());
  useEffect(() => {
    console.log(Date.now() - timeRef.current);
    timeRef.current = Date.now();
  }, [value]);

  return (
    <>
      <h1> This is a example of useMemo </h1>
      <button onClick={() => setValue(value + 1)}> click </button> {value}
    </>
  );
};

// import { useEffect, useRef, useState } from 'react';

// export default (props: {}) => {
//   const heavyFunction = () => {
//     for (let i = 0; i < 1e9; i++) {}
//     return 1000;
//   };
//   const cachedValue = heavyFunction();

//   const [value, setValue] = useState(1);

//   let timeRef = useRef(Date.now());
//   useEffect(() => {
//     console.log(Date.now() - timeRef.current);
//     timeRef.current = Date.now();
//   }, [value]);
//   return (
//     <>
//       <h1> This is a example of useMemo </h1>
//       <button onClick={() => setValue(value + 1)}> click </button> {value}
//     </>
//   );
// };
