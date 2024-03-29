import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import {AlertModule} from '@full-fledged/alerts';



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionY: 'bottom', positionX: 'right'}),
    RouterModule.forRoot(AppRoutes, {
      relativeLinkResolution: 'legacy',
    }),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
