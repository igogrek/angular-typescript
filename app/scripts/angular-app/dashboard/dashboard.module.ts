'use strict';

import angular = require('angular');

require('../../angular-ui/angular-ui-router');
require('../../angular-charts/angular-chart');
require('../../trnggrid/trNgGrid');

export = angular.module('dashboard', ['ui.router', 'chart.js', 'trNgGrid'])
	.controller('DashboardController', require('./dashboard.controller'))
	.factory('peopleService', require('./people.service'))
	.config(require('./dashboard.config'))
	.filter("fullName", function () {
		return function (fieldValueUnused, item) {
			return item.name.first + " " + item.name.last;
		}})