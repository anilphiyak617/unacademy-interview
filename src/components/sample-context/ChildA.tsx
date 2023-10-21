import { memo, useContext, useEffect } from 'react';
import { ColorContext, useColorContext } from './context/context';

const ChildA = (props) => {
  const ColorTheme = useColorContext();
  return <div style={{ color: ColorTheme.color }}>Child A</div>;
};

export default memo(ChildA);
