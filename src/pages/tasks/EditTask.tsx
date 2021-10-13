import React, { FormEventHandler, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppContext } from '../../store/AppContext';
import { EditForm } from './EditForm';
import { Task } from '../../store/TaskStore';

export const AddTask: React.FC = () => {
  const { header, tasks, progress } = useAppContext();
  const history = useHistory();

  useEffect(() => {
    header.update({ subtitle: 'Add new task' });
  }, [header]);

  const onSubmit = (task: Task) => {
    progress.update({ inProgress: true });
    tasks.add(task);
    window.setTimeout(() => {
      progress.update({ inProgress: false });
      history.push('/tasks');
    }, 600);
  };

  return (
    <div>
      <EditForm onSubmit={onSubmit} />
    </div>
  );
};
