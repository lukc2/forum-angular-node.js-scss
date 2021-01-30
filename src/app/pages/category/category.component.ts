import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  moduleId: module.id,
  selector: 'app-category-cmp',
  templateUrl: 'category.component.html'
})

export class CategoryComponent implements OnInit {
  http: HttpClient;
  posts: any;
  responseArray: any;
  href: string;
  constructor(private router: Router) {}
  addThread() {
      window.location.href = ( ""+ this.href + '/dodaj_watek')
  }
  sendPostRequest(data: Object, url: string): Observable<Object> {
    return this.http.post(this.href, data);
  }
  sendGetRequest() {
    return this.http.get(this.href);
  }

  ngOnInit() {
    this.href = this.router.url;
    this.responseArray = this.sendGetRequest();
    this.posts = JSON.parse(this.responseArray);
  }
}
