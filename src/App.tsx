import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Header } from './components/Header';
import { HtmlHeader } from './components/HtmlHeader';
import { AddTask } from './pages/tasks/AddTask';
import { EditTask } from './pages/tasks/EditTask';
import { Tasks } from './pages/tasks/Tasks';
import { Top } from './pages/top/Top';
import { AppContextProvider } from './store/AppContext';

import './App.css';

const AppContent: React.FC = observer(() => {
  return (
    <>
      <HtmlHeader />
      <div className="container App">
        <div>
          <Router>
            <Header />
            <Switch>
              <Route path="/" component={Top} exact />
              <Route path="/tasks/list" component={Tasks} exact />
              <Route path="/tasks/edit/:index" component={EditTask} exact />
              <Route path="/tasks/add" component={AddTask} exact />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
});

export const App: React.FC = () => {
  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
};
