'use strict';

module.exports = /*@ngInject*/ function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });     
    // For any unmatched url, redirect to /dashboard
    $urlRouterProvider.otherwise("/dashboard");                       
    $stateProvider
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard/dashboard.html",
            controller: 'DashboardController',
            controllerAs: 'dashboard'
        })     
        .state('chart', {
            url: "/chart",
            templateUrl: "views/chart/chart.html",
            controller: 'ChartController',
            controllerAs: 'chart'
        })                 
};
