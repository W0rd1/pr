import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBar } from '../../shared/search-bar/search-bar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SearchBar],
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
