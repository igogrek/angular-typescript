'use strict';

/*@ngInject*/ function SidebarController($location) {
    this.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
};

module.exports = SidebarController;