import {Component, EventEmitter, Output} from '@angular/core';
import {AlertService} from '@full-fledged/alerts';
import {Location} from '@angular/common';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';



@Component({
    selector: 'app-dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent  {
  // @Output() evente: EventEmitter<any>;
  // private location: Location;
  // private href: any;
  // user: '';
  // constructor(
  //   location: Location,
  //   private router: Router,
  //   private http: HttpClient
  // ) {
  //   this.location = location;
  //   // this.router.events.subscribe((ev) => {
  //   //   this.http.post('/uzytkownik', '').subscribe((req) =>
  //   //   this.user = req['username']);
  //   //   // this.evente.emit(this.user);
  //   //   } )
  //   }

}
