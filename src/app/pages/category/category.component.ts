import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Location} from '@angular/common';
import {AlertService} from '@full-fledged/alerts';

@Component({
  moduleId: module.id,
  selector: 'app-category-cmp',
  templateUrl: 'category.component.html'
})


export class CategoryComponent implements OnInit {
  posts: any;
  href: string;
  data: any;
  constructor(private router: Router,
              private http: HttpClient,
              private location: Location,
              public alertService: AlertService) {
    this.router.events.subscribe((ev) => {
      if (location.path() != this.href) {
        this.href = this.router.url;
        this.sendGetRequest();
      }
     });
  }

  addThread() {
      window.location.href = ( '' + this.href + '/dodaj_watek')
  }
  sendPostRequest(data: Object, url: string): Observable<Object> {
    return this.http.post(this.href, data);
  }
  sendGetRequest() {
  this.http.get(this.href).subscribe((data) => {
    if (data['redirectTo'] == '/') {
      this.data = data;
      this.returnLogin();
    } else {
      this.posts = data[0];
    }
    });
  }
  returnLogin() {
    this.alertService.warning(this.data['msg']);
    this.router.navigateByUrl('/dashboard');
  }
  ngOnInit() {
    this.href = this.router.url;
    // this.posts = JSON.parse(JSON.stringify(this.responseArray));
  }
}
