import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { PageComponent } from '../../pages/page/page.component';
import { ComputersComponent } from '../../pages/computers/computers.component';
import { MusicComponent } from '../../pages/music/music.component';
import { NewsComponent } from '../../pages/news/news.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: PageComponent },
    { path: 'computers',          component: ComputersComponent },
    { path: 'music',           component: MusicComponent },
    { path: 'news',  component: NewsComponent },
    { path: 'page',  component: PageComponent },
];
