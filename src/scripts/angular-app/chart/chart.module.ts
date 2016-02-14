'use strict';

import * as angular from 'angular';

import 'angular-ui-router';
import 'angular-chart.js';
import {ChartController} from './chart.controller';
import {ChartConfig} from './chart.config';

export = angular.module('chart', ['ui.router', 'chart.js'])
	.controller('ChartController', ChartController)
	.config(ChartConfig);