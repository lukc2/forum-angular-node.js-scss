import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AlertService} from '@full-fledged/alerts';
import {Observable} from 'rxjs';


@Component({
  moduleId: module.id,
  selector: 'app-post-cmp',
  templateUrl: 'post.component.html'
})

export class PostComponent implements OnInit {
  @Input() isLogged: boolean;
  form: FormGroup;
  loading = false;
  submitted = false;
  posts: any;
  href: string;
  logCheck() {
    // if (!this.isLogged) {
    //   window.location.href = ('/loguj')
    // }
  }
  constructor(
    private formBuilder: FormBuilder,
    public alertService: AlertService,
    private router: Router,
    private http: HttpClient
  ) {
    this.router.events.subscribe((ev) => {

      if (location.pathname != this.href) {
        // do something
        this.href = this.router.url;
        this.sendGetRequest();
      }
    });
  }
  sendPostRequest(data: Object, url: string) {
    this.http.post(url, data).subscribe((req) => {
      if (req['success'] == true) {
        this.alertService.success(req['msg']);
        this.form.reset();
        this.router.navigateByUrl(this.href.slice(0, -11) + 'watek/' + req['watek_id']);
      } else {
        req['errors']['errors'].forEach((err) => {
          this.alertService.danger(err['msg']);
        });
      }
      this.loading = false;
    });
  }
  sendGetRequest() {
    this.http.get(this.href).subscribe((data) => {
      if (data['redirectTo'] == '/') {
        this.alertService.warning(data['msg']);
        this.router.navigateByUrl('/dashboard');
      } else {
        this.posts = data[0];
      }
    });
  }
  ngOnInit() {
    this.href = this.router.url;
    this.form = this.formBuilder.group({
      tytul: ['', [Validators.required, Validators.min(10)]],
      tresc: ['', [Validators.required, Validators.min(10)]]
    });
  }
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
