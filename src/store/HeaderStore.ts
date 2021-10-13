import { action, makeObservable, observable } from 'mobx';

export class HeaderStore {
  title = 'Demo page';
  subtitle = 'React + mobx';

  constructor() {
    makeObservable(this, {
      title: observable,
      subtitle: observable,
      update: action,
    });
  }

  update(newValue: Partial<HeaderStore>): void {
    this.title = newValue.title ?? this.title;
    this.subtitle = newValue.subtitle ?? this.subtitle;
  }
}
