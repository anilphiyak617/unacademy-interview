import { createContext, useContext } from 'react';
import { ThemeProps } from '../Context';

const ColorContext = createContext<ThemeProps | undefined>(undefined);

//  *** creating custom hook
const useColorContext = () => {
  const ColorTheme = useContext(ColorContext);
  if (ColorTheme === undefined) {
    throw new Error(
      'Error: use useColorContext for handling the color context'
    );
  }

  return ColorTheme;
};
export { ColorContext, useColorContext };
