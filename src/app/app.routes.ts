import { Routes } from '@angular/router';
import { SectionPage } from './section-page/section-page.component';
import { HomePage } from './home-page/home-page.component';
import { SearchPage } from './search-page/search-page.component';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'section/:section', component: SectionPage },
  { path: 'search/:keyword', component: SearchPage },
];
