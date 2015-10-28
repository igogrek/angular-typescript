'use strict';

import angular = require('angular');

require('angular-ui-router');
require('highcharts-browserify');
require('highcharts-ng');

export = angular.module('highcharts', ['ui.router', 'highcharts-ng'])
	.controller('HighchartsController', require('./highcharts.controller').HighchartsController)
	.config(require('./highcharts.config').HighchartsConfig);