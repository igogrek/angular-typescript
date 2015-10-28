'use strict';

import angular = require('angular');

require('angular-ui-router');
require('angular-chart.js');

export = angular.module('chart', ['ui.router', 'chart.js'])
	.controller('ChartController', require('./chart.controller').ChartController)
	.config(require('./chart.config').ChartConfig);