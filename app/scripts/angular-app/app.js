'use strict';

var angular = require('angular');

require('../trnggrid/trNgGrid');
require('../angular-ui/angular-ui-router');
require('../angular-charts/angular-chart');

var app = angular.module('AngularApp',  ['trNgGrid', 'ui.router','chart.js'])
    .config(['$stateProvider','$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider) {
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
                controller: 'DashboardController'
            })     
            .state('chart', {
                url: "/chart",
                templateUrl: "views/chart/chart.html",
                controller: 'ChartController'
            })     
            
    }]);

app.controller('SidebarController', require('./index/SidebarController.js'));
app.controller('DashboardController', require('./dashboard/DashboardController.js'));
app.controller('ChartController', require('./chart/ChartController.js'));