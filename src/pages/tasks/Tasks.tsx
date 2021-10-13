import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { useAppContext } from '../../store/AppContext';
import { Task } from '../../store/TaskStore';

import './Tasks.css';

export const Tasks: React.FC = observer(() => {
  const { header, tasks } = useAppContext();

  useEffect(() => {
    header.update({ subtitle: 'Check all tasks' });
  }, [header]);

  const renderTask = (t: Task, i: number) => {
    const updateProgress = (done: boolean) => {
      tasks.replace(i, { ...t, done });
    };

    return (
      <div className="card mb-3" key={i}>
        <div className={classnames('card-body', { done: t.done })}>
          <p className="title">{t.title}</p>
          <p className="description" style={{ whiteSpace: 'pre-wrap' }}>
            {t.description} <Link to={`/tasks/edit/${i}`}>Edit</Link>
          </p>
          <form>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={'task' + i}
                checked={t.done}
                onChange={(e) => updateProgress(e.target.checked)}
              />
              <label className="form-check-label" htmlFor={'task' + i}>
                Done
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (tasks.list.length < 1) {
      return <p className="text-center">All done!</p>;
    }
    return <div>{tasks.list.map((t, i) => renderTask(t, i))}</div>;
  };

  return <div className="Tasks">{renderContent()}</div>;
});
