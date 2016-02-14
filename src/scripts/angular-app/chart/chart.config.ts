'use strict';

let dashboard =  require('./chart.html');

export class ChartConfig {

    static $inject = ['$stateProvider'];

    constructor($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('chart', {
                url: "/chart",
                template: dashboard,
                controller: 'ChartController',
                controllerAs: 'chart'
            })
    }
};