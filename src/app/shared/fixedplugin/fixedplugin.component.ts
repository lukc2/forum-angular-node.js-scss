import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-fixedplugin-cmp',
    templateUrl: 'fixedplugin.component.html'
})

export class FixedPluginComponent implements OnInit {

  public sidebarColor = 'white';
  public sidebarActiveColor = 'danger';
  public pageActiveColor = 'white';

  public state = true;
  private i = 1;
  changeSidebarColor(color) {
    const sidebar = <HTMLElement>document.querySelector('.sidebar');
    const icon = <HTMLElement>document.querySelector('#logo');
    this.sidebarColor = color;
    if (sidebar != undefined) {
        sidebar.setAttribute('data-color', color);
        icon.style.filter = 'invert(' + ((this.i++) % 2) + ')';
    }
  }
  changePageColor(color) {
    const page = <HTMLElement>document.querySelector('.main-panel');
    this.pageActiveColor = color;
    page.style.backgroundColor = color;
    // const card = <HTMLElement>document.querySelector('h1, h2, h3');
   // card.style.color = 'white';
  }
  changeSidebarActiveColor(color) {
    const sidebar = <HTMLElement>document.querySelector('.sidebar');
    this.sidebarActiveColor = color;
    if (sidebar != undefined) {
        sidebar.setAttribute('data-active-color', color);

    }
  }
  ngOnInit() {}
}
