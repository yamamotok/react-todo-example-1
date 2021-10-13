import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { useAppContext } from '../store/AppContext';

import './Header.css';

export const Header: React.FC = observer(() => {
  const { header } = useAppContext();
  const location = useLocation();

  return (
    <div className="Header">
      <h1>{header.title}</h1>
      <h2 className="mb-4">{header.subtitle}</h2>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/" className={classnames('nav-link', { disabled: location.pathname === '/' })}>
            Top page
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/tasks/list"
            className={classnames('nav-link', { disabled: location.pathname === '/tasks' })}
          >
            Check all tasks
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/tasks/add"
            className={classnames('nav-link', { disabled: location.pathname === '/tasks/add' })}
          >
            Add a new task
          </Link>
        </li>
      </ul>
    </div>
  );
});
