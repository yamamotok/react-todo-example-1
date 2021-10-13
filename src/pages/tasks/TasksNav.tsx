import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  currentPage: 'list' | 'new';
}

export const TasksNav: React.FC<Props> = (props) => {
  return (
    <ul className="nav mb-4">
      <li className="nav-item">
        {props.currentPage !== 'list' ? (
          <Link className="nav-link" to="/tasks/list">
            List tasks
          </Link>
        ) : (
          <Link className="nav-link disabled" to="/tasks/list">
            List tasks
          </Link>
        )}
      </li>
      <li className="nav-item">
        {props.currentPage !== 'new' ? (
          <Link className="nav-link" to="/tasks/add">
            Add new
          </Link>
        ) : (
          <Link className="nav-link disabled" to="/tasks/add">
            Add new
          </Link>
        )}
      </li>
    </ul>
  );
};
