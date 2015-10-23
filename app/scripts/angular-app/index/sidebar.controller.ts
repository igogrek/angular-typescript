'use strict';

export class SidebarController {
        
    navs: any[] = [{name:'dashboard'}, {name:'chart'}];

    static $inject = ['$location'];

    constructor(private $location: ng.ILocationService) { }

    isActive(nav: any) {
        let viewLocation = '/' + nav.name;
        return viewLocation === this.$location.path();
    }
}