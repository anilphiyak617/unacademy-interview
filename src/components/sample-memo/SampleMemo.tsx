import { memo } from 'react';

interface propTypes {
  value: number;
  callback: () => void;
}

export default memo(function ({ value, callback }: propTypes) {
  console.log('component with memo re-rendered');
  callback();
  return (
    <div>
      <h1> {value} </h1>
    </div>
  );
});
