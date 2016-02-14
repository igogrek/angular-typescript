'use strict';

let dashboard =  require('./dashboard.html');

export class DashboardConfig {

    static $inject = ['$stateProvider', '$urlRouterProvider'];

    constructor($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
        // For any unmatched url, redirect to /dashboard
        $urlRouterProvider.otherwise("/dashboard");
        $stateProvider
            .state('dashboard', {
                url: "/dashboard",
                template: dashboard,
                controller: 'DashboardController',
                controllerAs: 'dashboard'
            })
    }
};