import {Component, OnInit, Renderer2, ViewChild, ElementRef, Input} from '@angular/core';
import {ROUTES} from '../../sidebar/sidebar.component';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {AlertService} from '@full-fledged/alerts';


@Component({
  moduleId: module.id,
  selector: 'app-navbar-cmp',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
  location: Location;
  public isCollapsed = true;
  @ViewChild('app-navbar-cmp', {static: false}) button;
  private listTitles: any[];
  private nativeElement: Node;
  private toggleButton;
  private sidebarVisible: boolean;
  href: string;
  @Input()user: string;
  constructor(location: Location, private renderer: Renderer2, private element: ElementRef,
              private router: Router, private alert: AlertService) {
    this.location = location;
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    this.router.events.subscribe((event) => {
      this.sidebarClose();
    });
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
  userInfo(info) {
    this.user = info;
  }
  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

  logIn() {
    this.router.navigateByUrl('/loguj').catch(reason => this.alert.info(reason));
  }

  register() {
    this.router.navigateByUrl('/rejestracja').catch(reason => this.alert.info(reason));
  }

  logOut() {
    window.location.replace('/wyloguj');
    this.alert.info('Wylogowano!');
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);

    html.classList.add('nav-open');
    if (window.innerWidth < 991) {
      mainPanel.style.position = 'fixed';
    }
    this.sidebarVisible = true;
  };

  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
    if (window.innerWidth < 991) {
      setTimeout(function () {
        mainPanel.style.position = '';
      }, 500);
    }
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  };

  collapse() {
    this.isCollapsed = !this.isCollapsed;
    const navbar = document.getElementsByTagName('nav')[0];
    console.log(navbar);
    if (!this.isCollapsed) {
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('bg-white');
    } else {
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('bg-white');
    }

  }

}
