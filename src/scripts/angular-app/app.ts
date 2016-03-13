/// <reference path="../../../typings/tsd.d.ts" />
'use strict';

import * as angular from 'angular';

import 'angular-ui-router';

import './dashboard/dashboard.module';
import './chart/chart.module';
import './highcharts/highcharts.module';
import './notifyTest/notifyTest.module';

import '../../styles/master.scss';

import {SidebarController} from './index/sidebar.controller';
import {Config} from './config';

const external = [
	'ui.router'
];
const custom = [
	'dashboard',
	'chart',
	'highcharts',
    'notifyTest'
];

angular.module('AngularApp', external.concat(custom))
	.constant('customModules', custom)
	.controller('SidebarController', SidebarController)
	.config(Config);	