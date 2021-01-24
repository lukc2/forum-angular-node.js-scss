import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

const responseArray =  '' +
  '[{\"Name\":\"Title of post\",' +
  ' \"Content\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",' +
  ' \"Author\":\"Maniek\",' +
  ' \"id\":\"0\",' +
  ' \"Date\":\"18.01.2021\"},' +
  ' {\"Name\":\"Title of post 2\",' +
  ' \"Content\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",' +
  ' \"Author\":\"Maniek\",' +
  ' \"id\":\"1\",' +
  ' \"Date\":\"18.01.2021\"}]';
const posts = JSON.parse(responseArray)

@Component({
    moduleId: module.id,
    selector: 'app-news-cmp',
    templateUrl: 'news.component.html'
})

export class NewsComponent implements OnInit {
  @Input() isLogged: boolean;

  posts = posts
  form: FormGroup;
  loading = false;
  submitted = false;

  logCheck() {
    if (!this.isLogged) {
      window.location.href = ('#/login')
    }
  }
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
  }
}
