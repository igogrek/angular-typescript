'use strict';

var angular = require('angular');

require('../trnggrid/trNgGrid');
require('../angular-ui/angular-ui-router');
require('../angular-charts/angular-chart');

angular.module('AngularApp',  ['trNgGrid', 'ui.router','chart.js'])
	.controller('SidebarController', require('./index/sidebar.controller.js'))
	.controller('DashboardController', require('./dashboard/dashboard.controller.js'))
	.factory('peopleService', require('./dashboard/people.service.js'))
	.controller('ChartController', require('./chart/chart.controller.js'))
	.config(require('./config.js'));