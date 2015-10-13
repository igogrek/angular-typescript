'use strict';

/*@ngInject*/ 
function ChartConfig($stateProvider) {
    // For any unmatched url, redirect to /dashboard               
    $stateProvider
        .state('chart', {
            url: "/chart",
            templateUrl: "views/chart/chart.html",
            controller: 'ChartController',
            controllerAs: 'chart'
        })                  
};
module.exports = ChartConfig;