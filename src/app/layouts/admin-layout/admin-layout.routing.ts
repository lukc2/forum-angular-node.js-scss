import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { PageComponent } from '../../pages/page/page.component';
import { ComputersComponent } from '../../pages/computers/computers.component';
import { MusicComponent } from '../../pages/music/music.component';
import { NewsComponent } from '../../pages/news/news.component';
import { LoginComponent } from '../../account/login.component';
import { RegisterComponent } from '../../account/register.component';
import { ProfileComponent } from '../../account/profile.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'computers',      component: ComputersComponent },
    { path: 'music',          component: MusicComponent },
    { path: 'news',           component: NewsComponent },
    { path: 'page',           component: PageComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'profile',        component: ProfileComponent },
];

