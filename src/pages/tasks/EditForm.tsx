import React, { FormEventHandler, useMemo } from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Task } from '../../store/TaskStore';

import { EditFormStore } from './EditFormStore';

interface Props {
  onSubmit: (task: Task) => void;
  initialValue?: Task;
}

export const EditForm: React.FC<Props> = observer((props) => {
  const store = useMemo(() => new EditFormStore(props.initialValue), []);
  const editMode = !!props.initialValue;

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    props.onSubmit(store.peek());
  };

  const renderError = () => {
    if (!store.error) {
      return null;
    }
    return (
      <div className="alert alert-danger" role="alert">
        {store.error}
      </div>
    );
  };

  return (
    <>
      {renderError()}
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
          <textarea
            className="form-control"
            id="taskDescription"
            rows={3}
            value={store.description}
            onChange={(e) => store.update({ description: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className={classnames('btn btn-primary', { disabled: store.error || store.checkError() })}
        >
          {editMode ? 'Update' : 'Create'}
        </button>
      </form>
    </>
  );
});
