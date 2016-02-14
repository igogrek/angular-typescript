'use strict';

import * as angular from 'angular';

import 'angular-ui-router';
import 'angular-chart.js';
import 'angular-chart.js/dist/angular-chart.css';
import 'tr-ng-grid/trNgGrid';
import 'tr-ng-grid/trNgGrid.css';

import './dashboard.scss';


import {DashboardController} from './dashboard.controller';
import {PeopleService} from './people.service';
import {DashboardConfig} from './dashboard.config';

export = angular.module('dashboard', ['ui.router', 'chart.js', 'trNgGrid'])
	.controller('DashboardController', DashboardController)
	.service('peopleService', PeopleService)
	.config(DashboardConfig)
	.filter("fullName", function () {
		return function (fieldValueUnused: any, item: any) {
			return item.name.first + " " + item.name.last;
		}})