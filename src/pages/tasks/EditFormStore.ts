import { action, autorun, makeObservable, observable, runInAction } from 'mobx';

import { Task } from '../../store/TaskStore';

export class EditFormStore implements Task {
  title = '';
  description = '';
  done = false;
  error = '';
  onceEdited = false;

  constructor(initialValue?: Task) {
    this.title = initialValue?.title ?? '';
    this.description = initialValue?.description ?? '';
    this.done = initialValue?.done ?? false;

    makeObservable(this, {
      title: observable,
      description: observable,
      done: observable,
      error: observable,
      update: action,
    });

    autorun(() => {
      const newError = this.checkError() ?? '';
      runInAction(() => {
        if (this.onceEdited && this.error !== newError) {
          this.error = newError;
        }
        this.onceEdited = true;
      });
    });
  }

  update(newValue: Partial<Task>): void {
    this.title = newValue.title ?? this.title;
    this.description = newValue.description ?? this.description;
    this.done = newValue.done ?? this.done;
  }

  checkError(): string | undefined {
    if (!this.title) {
      return 'Title is empty.';
    }
    return undefined;
  }

  peek(): Task {
    return { description: this.description, done: this.done, title: this.title };
  }
}
