import React, { createContext, useContext, useMemo } from 'react';
import { HeaderContext } from './HeaderContext';

export class ApplicationContext {
  header = new HeaderContext();
}

const Context = createContext<ApplicationContext | undefined>(undefined);

export const ApplicationContextProvider: React.FC = (props) => {
  const value = useMemo(() => new ApplicationContext(), []);
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export const useApplicationContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw Error('Application context is not ready');
  }
  return { ...context };
};
