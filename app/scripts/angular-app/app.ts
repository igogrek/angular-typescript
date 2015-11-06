/// <reference path="../../../typings/lodash/lodash.d.ts" />
/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts" />
'use strict';

import * as angular from 'angular';

import 'angular-ui-router';

import './dashboard/dashboard.module';
import './chart/chart.module';
import './highcharts/highcharts.module';

import {SidebarController} from './index/sidebar.controller';
import {Config} from './config';

const external = [
	'ui.router'
];
const custom = [
	'dashboard',
	'chart',
	'highcharts'
];

angular.module('AngularApp', external.concat(custom))
	.constant('customModules', custom)
	.controller('SidebarController', SidebarController)
	.config(Config);	