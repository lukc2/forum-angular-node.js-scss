import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',       icon:'nc-app',       class: '' },
    { path: '/computers',     title: 'computers',       icon:'nc-tv-2',      class: '' },
    { path: '/music',         title: 'Music',           icon:'nc-note-03',   class: '' },
    { path: '/news',          title: 'News',            icon:'nc-planet',    class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
