'use strict';

import * as angular from 'angular';
import 'angular-ui-router';
import 'highcharts-browserify';
import 'highcharts-browserify/themes/grid-light';
//import 'highcharts-browserify/themes/dark-unica';
import 'highcharts-browserify/3d';
import 'highcharts-ng';
import 'angularjs-slider';

import {HighchartsController} from './highcharts.controller';
import {HighchartsConfig} from './highcharts.config';

export = angular.module('highcharts', ['ui.router', 'highcharts-ng', 'rzModule'])
	.controller('HighchartsController', HighchartsController)
	.config(HighchartsConfig);