'use strict';

import angular = require('angular');

require('angular-ui-router');
require('highcharts-browserify');
require('highcharts-browserify/themes/grid-light');
require('highcharts-browserify/3d');
//require('highcharts-browserify/themes/dark-unica');
require('highcharts-ng');
require('angularjs-slider');

export = angular.module('highcharts', ['ui.router', 'highcharts-ng', 'rzModule'])
	.controller('HighchartsController', require('./highcharts.controller').HighchartsController)
	.config(require('./highcharts.config').HighchartsConfig);