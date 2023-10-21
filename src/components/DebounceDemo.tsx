import { useState } from 'react';

export default () => {
  const [curVal, setVal] = useState('');

  const createDebounce = (callback, delay) => {
    // ** Returns: function that triggers callback only when there is a delay in input
    let timerId = null;
    return function (event) {
      // ** clears the timeout if it exists
      if (timerId) clearTimeout(timerId);
      // ** references a new timer
      timerId = setTimeout(() => {
        callback(event);
      }, delay);
    };
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={createDebounce(handleChange, 2000)}></input>
      <h2>{curVal}</h2>
    </div>
  );
};

// ** DEBOUNCING Targets :
// ** we want to watch the input value changes
// ** we only want to trigger the callback when users stops typing for a moment
