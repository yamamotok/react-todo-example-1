import { action, makeObservable, observable } from 'mobx';

export class ProgressStore {
  inProgress = false;

  constructor() {
    makeObservable(this, {
      inProgress: observable,
      update: action,
    });
  }

  update(value: Partial<ProgressStore>): void {
    this.inProgress = value.inProgress ?? this.inProgress;
  }
}
