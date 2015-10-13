'use strict';

/*@ngInject*/ 
function SidebarController($location) {
    var vm = this;
    vm.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
};

module.exports = SidebarController;