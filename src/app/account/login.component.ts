import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AlertService} from '@full-fledged/alerts';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login-cmp',
  moduleId: module.id,
  templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  http: HttpClient;
  form: FormGroup;
  loading = false;
  submitted = false;
  posts: any;
  responseArray: any;
  private href: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public alertService: AlertService,
  ) { }

  ngOnInit() {
    this.href = this.router.url;
    this.responseArray = this.sendGetRequest();
    this.posts = JSON.parse(this.responseArray);
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }
  sendPostRequest(data: Object, url: string): Observable<Object> {
    return this.http.post(this.href, data);
  }
  sendGetRequest() {
    return this.http.get(this.href);
  }
  onSubmit(post) {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.sendPostRequest(JSON.stringify(post), this.href);
    this.form.reset();
    this.alertService.success('Zalogowano!');
  }
}
