import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

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
const post = JSON.parse(responseArray);
const comments = JSON.parse(commentsArray);

@Component({
  selector: 'app-thread-cmp',
  moduleId: module.id,
  templateUrl: 'thread.component.html'
})

export class ThreadComponent implements OnInit {
  post = post[0];
  comments = comments;
  @Input() isLogged: boolean;

  logCheck() {
    if (!this.isLogged) {
      window.location.href = ('#/loguj')
    }
  }

  ngOnInit(): void {
  }
}
