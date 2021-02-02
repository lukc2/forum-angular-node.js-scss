import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/kategoria/1',     title: 'Rowery',       icon: 'nc-compass-05',      class: '' },
    { path: '/kategoria/2',         title: 'Samochody',           icon: 'nc-bus-front-12',   class: '' },
    { path: '/kategoria/3',          title: 'Off-Topic',            icon: 'nc-planet',    class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
