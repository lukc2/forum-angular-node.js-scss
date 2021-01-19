import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr";


@Component({
    moduleId: module.id,
    selector: 'news-cmp',
    templateUrl: 'news.component.html'
})

export class NewsComponent {
  postGroup: any;
}
