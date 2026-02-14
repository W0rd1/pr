import { Component, Directive, HostListener, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBar } from '../../shared/search-bar/search-bar';
import { Router } from '@angular/router';
import { ActiveStateService } from '../../services/active-state-service';
// (click)="changeActiveness('contact')" [class.active]="isActive==='contact'" // Old approach
@Directive({
  selector: '[ActiveState]',
  standalone: true,
})
export class ActiveState {
  @Input('ActiveState') name!: string;
  constructor(private ActiveServiceInstance: ActiveStateService) {}
  @HostBinding('class.active')
  get isActive() {
    return this.ActiveServiceInstance.isActive === this.name;
  }

  @HostListener('click')
  onClick() {
    this.ActiveServiceInstance.setActive(this.name);
  }
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SearchBar, ActiveState],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  isMobileMenuOpen = false;
  ImgUrl: string = 'assets/images/profile.jpg';

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
