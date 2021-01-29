import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AlertService} from '@full-fledged/alerts';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

const responseArray =  '' +
  '[{\"Name\":\"Title of post\",' +
  ' \"Content\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",' +
  ' \"Category\":\"Category\",' +
  ' \"Author\":\"Maniek\",' +
  ' \"id\":\"0\",' +
  ' \"Date\":\"18.01.2021\",' +
  ' \"Content_url\":\"https://www.youtube.com/watch?v=5qap5aO4i9A\"}]';

const commentsArray =  '' +
  '[{\"Name\":\"Title of post\",' +
  ' \"Content\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",' +
  ' \"Author\":\"Maniek\",' +
  ' \"id\":\"0\",' +
  ' \"Date\":\"18.01.2021\"}]';
const content = JSON.parse(responseArray);
const comments = JSON.parse(commentsArray);

@Component({
  selector: 'app-thread-cmp',
  moduleId: module.id,
  templateUrl: 'thread.component.html'
})


export class ThreadComponent implements OnInit {
  http: HttpClient;
  form: FormGroup;
  loading = false;
  submitted = false;
  content = content[0];
  comments = comments;
  posts: any;
  responseArray: any;
  href: string;

  constructor(
    private formBuilder: FormBuilder,
    public alertService: AlertService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.href = this.router.url;
    this.responseArray = this.sendGetRequest();
    this.posts = JSON.parse(this.responseArray);
    this.form = this.formBuilder.group({
      body: ['', Validators.required]
    });
  }
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
    this.alertService.success('Zapostowano!');
    this.form.reset();
  }


}
