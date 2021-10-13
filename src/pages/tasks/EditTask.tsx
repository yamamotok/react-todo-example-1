import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useAppContext } from '../../store/AppContext';
import { Task } from '../../store/TaskStore';

import { EditForm } from './EditForm';

export const EditTask: React.FC = () => {
  const { header, tasks, progress } = useAppContext();
  const history = useHistory();
  const { index: indexStr } = useParams<{ index: string }>();

  const index = Number(indexStr);
  const task = tasks.list[index];

  useEffect(() => {
    header.update({ subtitle: `Edit task #${index}` });
  }, [header]);

  const onSubmit = (task: Task) => {
    progress.update({ inProgress: true });
    tasks.replace(index, task);
    window.setTimeout(() => {
      progress.update({ inProgress: false });
      history.push('/tasks/list');
    }, 100);
  };

  if (!task) {
    return null;
  }

  return (
    <div>
      <EditForm onSubmit={onSubmit} initialValue={task} />
    </div>
  );
};
