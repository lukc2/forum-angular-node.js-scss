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
  form: FormGroup;
  loading = false;
  submitted = false;
  posts: any;
  private href: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public alertService: AlertService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.href = this.router.url;
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      haslo: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }
  sendPostRequest(data: Object, url: string) {
    this.http.post(url, data).subscribe((req) => {
      if (req['success'] == true) {
        this.form.reset();
        this.alertService.success(req['msg']);
        this.router.navigateByUrl('/dashboard');
      } else {
        req['errors']['errors'].forEach((err) => {
          this.alertService.danger(err['msg']);
        });
      }
      this.loading = false;
    });
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
    this.sendPostRequest(post, this.href);
  }
}
