import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AlertService} from '@full-fledged/alerts';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {DatePipe, Location} from '@angular/common';
import {ROUTES} from '../../sidebar/sidebar.component';


@Component({
  selector: 'app-thread-cmp',
  moduleId: module.id,
  templateUrl: 'thread.component.html'
})


export class ThreadComponent implements OnInit {
  location: Location;
  http: HttpClient;
  form: FormGroup;
  loading = false;
  submitted = false;
  private listTitles: any[];
  request: any;
  href: string;
  pipe = new DatePipe('en-US');
  constructor(
    location: Location,
    private formBuilder: FormBuilder,
    public alertService: AlertService,
    private router: Router
  ) {
    this.location = location;
    this.router.events.subscribe((ev) => {

    if (location.path() != this.href) {
      // do something
      this.href = this.router.url;
      this.sendGetRequest();
    }
  }); }
  ngOnInit(): void {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.form = this.formBuilder.group({
      body: ['', Validators.required]
    });
  }
  get f() { return this.form.controls; }
  sendPostRequest(data: Object, url: string): Observable<Object> {
    return this.http.post(this.href, data);
  }
  sendGetRequest() {
    this.http.get(this.href).subscribe((data) => {
      this.request = data[0];
    });
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
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return '';
  }


}
