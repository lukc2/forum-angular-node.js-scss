import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { ComputersComponent }           from '../../pages/computers/computers.component';
import { MusicComponent }            from '../../pages/music/music.component';
import { NewsComponent }   from '../../pages/news/news.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {PageComponent} from "../../pages/page/page.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    ComputersComponent,
    MusicComponent,
    NewsComponent,
    PageComponent,
  ]
})

export class AdminLayoutModule {}
