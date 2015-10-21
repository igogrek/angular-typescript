/// <reference path="../../../../typings/angular-ui-router.d.ts" />

'use strict';

export class ChartConfig {

    static $inject = ['$stateProvider'];

    constructor($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('chart', {
                url: "/chart",
                templateUrl: "views/chart/chart.html",
                controller: 'ChartController',
                controllerAs: 'chart'
            })
    }
};