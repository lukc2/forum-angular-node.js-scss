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
    form: FormGroup;
    loading = false;
    submitted = false;
    aaa: any
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
            nazwa: ['', [Validators.required, Validators.min(4)]],
            email: ['', [Validators.required, Validators.email]],
            login: ['', [Validators.required, Validators.min(4)]],
            haslo: ['', [Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')]]
        });
    }
  sendPostRequest(data: Object, url: string) {
    this.http.post(this.href, data).subscribe((req) => {
      if (req['success'] == true) {
        this.alertService.success(req['msg']);
        this.form.reset();
        this.router.navigateByUrl('/loguj');
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
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit(post) {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.sendPostRequest(post, this.href);
    }
}
