'use strict';

let dashboard =  require('./dashboard.html');

export class DashboardConfig {

    static $inject = ['$stateProvider', '$urlRouterProvider'];

    constructor($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
        $stateProvider
            .state('dashboard', {
                url: "/dashboard",
                template: dashboard,
                controller: 'DashboardController',
                controllerAs: 'dashboard'
            })
    }
};