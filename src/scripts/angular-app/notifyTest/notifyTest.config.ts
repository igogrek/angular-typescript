'use strict';

let notifyTest =  require('./notifyTest.html');

export class NotifyTestConfig {

    static $inject = ['$stateProvider', '$urlRouterProvider'];

    constructor($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise("/notifyTest");
        
        $stateProvider
            .state('notifyTest', {
                url: "/notifyTest",
                template: notifyTest,
                controller: 'NotifyTestController',
                controllerAs: 'notifyTest'
            })
    }
};