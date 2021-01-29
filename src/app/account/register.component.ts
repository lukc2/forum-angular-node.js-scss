import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AlertService} from '@full-fledged/alerts';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-register-cmp',
  moduleId: module.id,
  templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
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
            name: ['', [Validators.required, Validators.min(4)]],
            username: ['', [Validators.required, Validators.min(4)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')]]
        });
    }
  sendPostRequest(data: Object, url: string): Observable<Object> {
    return this.http.post(this.href, data);
  }
  sendGetRequest() {
    return this.http.get(this.href);
  }
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit(post) {
        this.submitted = true;

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.sendPostRequest(JSON.stringify(post), this.href);
        this.form.reset();
        this.alertService.success('Zarejestrowano!');
    }
}
