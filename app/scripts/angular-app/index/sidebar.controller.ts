'use strict';

class SidebarController {

    static $inject = ['$location'];

    constructor(private $location: ng.ILocationService) { }

    isActive(viewLocation) {
        return viewLocation === this.$location.path();
    };
};

export = SidebarController;