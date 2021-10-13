import React, { createContext, useContext, useMemo } from 'react';

import { HeaderStore } from './HeaderStore';
import { ProgressStore } from './ProgressStore';
import { TaskStore } from './TaskStore';

export class AppContext {
  readonly header = new HeaderStore();
  readonly tasks = new TaskStore();
  readonly progress = new ProgressStore();
}

const Context = createContext<AppContext | undefined>(undefined);

export const AppContextProvider: React.FC = (props) => {
  const value = useMemo(() => new AppContext(), []);
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export const useAppContext = (): AppContext => {
  const context = useContext(Context);
  if (!context) {
    throw Error('Application context is not ready');
  }
  return { ...context };
};
