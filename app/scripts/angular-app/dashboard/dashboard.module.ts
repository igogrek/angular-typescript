'use strict';

import angular = require('angular');

require('../../angular-ui/angular-ui-router');
require('../../angular-charts/angular-chart');
require('../../trnggrid/trNgGrid');

export = angular.module('dashboard', ['ui.router', 'chart.js', 'trNgGrid'])
	.controller('DashboardController', require('./dashboard.controller').DashboardController)
	.service('peopleService', require('./people.service').PeopleService)
	.config(require('./dashboard.config').DashboardConfig)
	.filter("fullName", function () {
		return function (fieldValueUnused, item) {
			return item.name.first + " " + item.name.last;
		}})