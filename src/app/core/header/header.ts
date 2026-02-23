import { Component, Directive, HostBinding, HostListener, Input, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBar } from '../../shared/search-bar/search-bar';
import { ActiveStateService } from '../../services/active-state';
import { RouterLink } from "@angular/router";


@Directive({
  selector: '[ActiveState]',
  standalone: true,
})
export class ActiveState {
  @Input('ActiveState') name!: string;
  constructor(private ActiveServiceInstance: ActiveStateService) {}
  @HostBinding('class.active')
  get isActive() {
    return this.ActiveServiceInstance.Active === this.name;
  }

  @HostListener('click')
  onClick() {
    this.ActiveServiceInstance.setActive(this.name);
  }
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SearchBar, ActiveState, RouterLink],
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
