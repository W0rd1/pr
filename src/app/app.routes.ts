import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { UserProfile } from './shared/user-profile/user-profile';
import { MainLayout } from './layout/main/main';
import { Footer } from './core/footer/footer';
import { SearchBar } from './shared/search-bar/search-bar';

export const routes: Routes = [
  { path: '', component: MainLayout, children: [{ path: '', component: Home }
  ] },
  { path: 'profile', component: UserProfile }
];
