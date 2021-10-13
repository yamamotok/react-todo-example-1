import { Task } from '../../store/TaskStore';
import { action, makeObservable, observable } from 'mobx';

export class NewTaskStore implements Task {
  title = '';
  description = '';
  done = false;

  constructor() {
    makeObservable(this, {
      title: observable,
      description: observable,
      update: action,
    });
  }

  update(newValue: Partial<Task>): void {
    this.title = newValue.title ?? this.title;
    this.description = newValue.description ?? this.description;
  }
}
