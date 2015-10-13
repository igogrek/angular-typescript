'use strict';

/*@ngInject*/ 
function DashboardConfig($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /dashboard
    $urlRouterProvider.otherwise("/dashboard");                    
    $stateProvider
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard/dashboard.html",
            controller: 'DashboardController',
            controllerAs: 'dashboard'
        })                  
};
module.exports = DashboardConfig;