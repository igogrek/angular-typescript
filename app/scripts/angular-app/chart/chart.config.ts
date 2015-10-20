'use strict';

export class ChartConfig {

    static $inject = ['$stateProvider'];

    constructor($stateProvider) {
        $stateProvider
            .state('chart', {
                url: "/chart",
                templateUrl: "views/chart/chart.html",
                controller: 'ChartController',
                controllerAs: 'chart'
            })
    }
};