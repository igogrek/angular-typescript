'use strict';

import angular = require('angular');

require('../../angular-ui/angular-ui-router');
require('../../angular-charts/angular-chart');

export = angular.module('chart', ['ui.router', 'chart.js'])
	.controller('ChartController', require('./chart.controller'))
	.config(require('./chart.config'));