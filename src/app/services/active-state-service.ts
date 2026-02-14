import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActiveStateService {
  isActive: string = 'home';

  setActive(isActive: string) {
    this.isActive = isActive;
  }
}
