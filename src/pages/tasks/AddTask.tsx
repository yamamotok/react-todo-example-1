import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppContext } from '../../store/AppContext';
import { Task } from '../../store/TaskStore';

import { EditForm } from './EditForm';

export const AddTask: React.FC = () => {
  const { header, tasks, progress } = useAppContext();
  const history = useHistory();

  useEffect(() => {
    header.update({ subtitle: 'Add a new task' });
  }, [header]);

  const onSubmit = (task: Task) => {
    progress.update({ inProgress: true });
    tasks.add(task);
    window.setTimeout(() => {
      progress.update({ inProgress: false });
      history.push('/tasks/list');
    }, 600);
  };

  return (
    <div>
      <EditForm onSubmit={onSubmit} />
    </div>
  );
};
