import React, { FormEventHandler, useEffect, useMemo } from 'react';
import { observer } from 'mobx-react-lite';

import { useAppContext } from '../../store/AppContext';
import { TasksNav } from './TasksNav';

import './TasksNew.css';
import { EditFormStore } from './NewTaskStore';

const NewTaskForm: React.FC<{ store: EditFormStore }> = observer(({ store }) => {
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group mb-4">
        <label htmlFor="taskTitle">Title</label>
        <input
          type="text"
          className="form-control"
          id="taskTitle"
          placeholder="Title"
          value={store.title}
          onChange={(e) => store.update({ title: e.target.value })}
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="taskDescription">Description</label>
        <input
          type="text"
          className="form-control"
          id="taskDescription"
          placeholder="Description"
          value={store.description}
          onChange={(e) => store.update({ description: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
});

export const TasksNew: React.FC = () => {
  const { header } = useAppContext();
  const store = useMemo(() => new EditFormStore(), []);

  useEffect(() => {
    header.update({ subtitle: 'Add new task' });
  }, [header]);

  return (
    <div>
      <TasksNav currentPage="new" />
      <div className="TasksNew">
        <NewTaskForm store={store} />
      </div>
    </div>
  );
};
