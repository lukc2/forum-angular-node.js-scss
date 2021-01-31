import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Location} from '@angular/common';


@Component({
  moduleId: module.id,
  selector: 'app-category-cmp',
  templateUrl: 'category.component.html'
})


export class CategoryComponent implements OnInit {
  posts: any;
  href: string;
  constructor(private router: Router,
              private http: HttpClient,
              private location: Location) {
    this.router.events.subscribe((ev) => {

      if (location.path() != this.href) {
        // do something
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
      this.posts = data[0];
    });
  }
  ngOnInit() {

    // this.posts = JSON.parse(JSON.stringify(this.responseArray));
  }
}
