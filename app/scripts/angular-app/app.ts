/// <reference path="../../../typings/node.d.ts" />
/// <reference path="../../../typings/lodash.d.ts" />
/// <reference path="../../../typings/angular.d.ts" />
/// <reference path="../../../typings/angular-ui-router.d.ts" />

'use strict';

import angular = require('angular');

require('angular-ui-router');

require('./dashboard/dashboard.module');
require('./chart/chart.module');
require('./highcharts/highcharts.module');

angular.module('AngularApp', ['ui.router', 'dashboard', 'chart', 'highcharts'])
	.controller('SidebarController', require('./index/sidebar.controller').SidebarController)
	.config(require('./config').Config);		