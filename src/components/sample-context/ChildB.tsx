import { useContext } from 'react';
import { ColorContext, useColorContext } from './context/context';

const ChildB = () => {
  const ColorTheme = useColorContext();
  console.log(ColorTheme);

  return <div style={{ color: ColorTheme.color }}>Child B</div>;
};

export default ChildB;
