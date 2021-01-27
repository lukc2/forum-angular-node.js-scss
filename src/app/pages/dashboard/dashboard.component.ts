import { Component} from '@angular/core';

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
    selector: 'app-dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent  {
  posts = posts;
}
