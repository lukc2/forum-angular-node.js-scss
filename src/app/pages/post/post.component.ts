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
  http: HttpClient;
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
    private router: Router
  ) {
    this.router.events.subscribe((ev) => {

      if (location.pathname != this.href) {
        // do something
        this.href = this.router.url;
        this.sendGetRequest();
      }
    });
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
    this.form = this.formBuilder.group({
      title: ['', Validators.required, Validators.min(10)]
    });
  }
  get f() { return this.form.controls; }

  onSubmit(post) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.sendPostRequest(JSON.stringify(post), this.href);
    this.form.reset();
    this.alertService.success('Dodano watek!');
  }
}
