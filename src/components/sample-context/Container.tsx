import ChildA from './ChildA';
import ChildB from './ChildB';

const Container = ({}) => {
  return (
    <>
      <br />
      I am container:
      <ChildA />
      <ChildB />
    </>
  );
};

export default Container;
