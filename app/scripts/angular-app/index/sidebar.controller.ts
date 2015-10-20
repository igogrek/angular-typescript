'use strict';

export class SidebarController {

    static $inject = ['$location'];

    constructor(private $location: ng.ILocationService) { }

    isActive(viewLocation) {
        return viewLocation === this.$location.path();
    };
};