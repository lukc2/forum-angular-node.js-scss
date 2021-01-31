import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule, Location} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { LoginComponent } from '../../account/login.component';
import { RegisterComponent } from '../../account/register.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ThreadComponent} from '../../pages/thread/thread.component';
import {CategoryComponent} from '../../pages/category/category.component';
import {PostComponent} from '../../pages/post/post.component';
import {AlertModule, AlertService} from '@full-fledged/alerts';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AlertModule,
    HttpClientModule,
  ],
  declarations: [
    DashboardComponent,
    ThreadComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    PostComponent,
  ]
})

export class AdminLayoutModule {}
