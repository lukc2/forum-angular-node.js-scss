import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/kategoria/0',     title: 'Komputery',       icon: 'nc-tv-2',      class: '' },
    { path: '/kategoria/1',         title: 'Muzyka',           icon: 'nc-note-03',   class: '' },
    { path: '/kategoria/2',          title: 'Wydarzenia',            icon: 'nc-planet',    class: '' },
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
