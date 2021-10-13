import { action, makeObservable, observable } from 'mobx';

export interface Task {
  title: string;
  description: string;
  done: boolean;
}

export class TaskStore {
  readonly list = observable.array<Task>([]);

  constructor() {
    makeObservable(this, {
      add: action,
      replace: action,
      clear: action,
    });
  }

  add(task: Task): number {
    return this.list.unshift(task);
  }

  replace(index: number, task: Task): void {
    this.list[index] = task;
  }

  clear(): void {
    this.list.clear();
  }
}
