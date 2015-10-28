'use strict';

export class HighchartsConfig {

    static $inject = ['$stateProvider'];

    constructor($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('highcharts', {
                url: "/highcharts",
                templateUrl: "views/highcharts/highcharts.html",
                controller: 'HighchartsController',
                controllerAs: 'highcharts'
            })
    }
};