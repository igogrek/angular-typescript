'use strict';

var angular = require('angular');

require('../trnggrid/trNgGrid');
require('../angular-ui/angular-ui-router');
require('../angular-charts/angular-chart');

angular.module('AngularApp',  ['trNgGrid', 'ui.router','chart.js'])
	.controller('SidebarController', require('./index/SidebarController.js'))
	.controller('DashboardController', require('./dashboard/DashboardController.js'))
	.factory('PeopleService', require('./dashboard/PeopleService.js'))
	.controller('ChartController', require('./chart/ChartController.js'))
	.config(require('./config.js'));