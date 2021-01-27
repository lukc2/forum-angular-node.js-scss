import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


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

  logCheck() {
    if (!this.isLogged) {
      window.location.href = ('#/loguj')
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
