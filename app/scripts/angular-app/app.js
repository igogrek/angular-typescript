'use strict';

var angular = require('angular');



require('../trnggrid/trNgGrid');
require('../angular-ui/angular-ui-router');
require('../angular-charts/angular-chart');
var app = angular.module('AngularApp',  ['trNgGrid', 'ui.router','chart.js'])
    .config(function($stateProvider, $urlRouterProvider,$locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });     
        // For any unmatched url, redirect to /state1
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
            
    });

app.controller('SidebarController', ['$scope','$location', require('./index/SidebarController.js')]);
app.controller('DashboardController', ['$scope','$interval', require('./dashboard/DashboardController.js')]);
app.controller('ChartController', ['$scope','$interval', require('./chart/ChartController.js')]);