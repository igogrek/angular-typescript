'use strict';

let highcharts =  require('./highcharts.html');

export class HighchartsConfig {

    static $inject = ['$stateProvider'];

    constructor($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('highcharts', {
                url: "/highcharts",
                template: highcharts,
                controller: 'HighchartsController',
                controllerAs: 'highcharts'
            })
    }
};