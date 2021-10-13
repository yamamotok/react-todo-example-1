import { action, makeObservable, observable } from 'mobx';

export class HeaderContext {
  title: string = 'Demo page';
  subtitle: string = '';

  constructor() {
    makeObservable(this, {
      title: observable,
      subtitle: observable,
      update: action,
    });
  }

  update(newValue: Partial<HeaderContext>): void {
    this.title = newValue.title ?? this.title;
    this.subtitle = newValue.subtitle ?? this.subtitle;
  }
}
