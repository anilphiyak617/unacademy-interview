import { FC, useCallback, useState } from 'react';
import Counter from './components/Counter';
import DebounceDemo from './components/DebounceDemo';
import Context from './components/sample-context/Context';
import SampleMemo from './components/sample-memo/SampleMemo';
import WithoutMemo from './components/sample-memo/WithoutMemo';
import CounterMemo from './components/sample-useMemo/CounterMemo';
import Throttling from './components/Throttling';
import UseRefExample from './components/UseRefExample';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [value, setValue] = useState<number>(23);

  const callback = () => console.log('This is a callback');
  const wrappedCallback = useCallback(callback, []);

  const heavyDataFn = () => {
    const data = Array(1e4).fill((e) => 9);
    console.log(data);
    data.forEach(() => {});

    return 23;
  };

  return (
    <div>
      {/* <Counter /> */}
      {/* <DebounceDemo /> */}
      {/* <Throttling /> */}
      {/* ------ HOOKS-----  */}
      {/* <SampleMemo value={34} callback={callback} /> */}
      {/* <WithoutMemo value={34} /> */}
      {/* <UseRefExample /> */}
      {/* <CounterMemo /> */}
      <Context />
    </div>
  );
};
