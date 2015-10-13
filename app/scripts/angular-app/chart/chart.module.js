'use strict';

var angular = require('angular');

require('../../angular-ui/angular-ui-router');
require('../../angular-charts/angular-chart');

module.exports = angular.module('chart', ['ui.router', 'chart.js'])
	.controller('ChartController', require('./chart.controller'))
	.config(require('./chart.config'));