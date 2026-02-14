import { Component } from '@angular/core';
import { Banner } from '../../features/banner/banner';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [Banner],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {}
