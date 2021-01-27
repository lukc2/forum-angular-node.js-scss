import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ThreadComponent } from '../../pages/thread/thread.component';
import { LoginComponent } from '../../account/login.component';
import { RegisterComponent } from '../../account/register.component';
import {PostComponent} from '../../pages/post/post.component';
import {CategoryComponent} from '../../pages/category/category.component';

const kategoria_id = [0, 1, 2];
const watek_id = [0, 1, 2];

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'loguj',          component: LoginComponent },
    { path: 'rejestracja',       component: RegisterComponent },
    { path: 'kategoria/::kategoria_id/post',       component: PostComponent },
    { path: 'kategoria/::kategoria_id/watek/::watek_id',      component: ThreadComponent},
    { path: 'kategoria/::kategoria_id',      component: CategoryComponent},
];

