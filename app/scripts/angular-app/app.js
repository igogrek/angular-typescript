'use strict';

var angular = require('angular');

require('../angular-ui/angular-ui-router');
require('./dashboard/dashboard.module');
require('./chart/chart.module');

angular.module('AngularApp', ['ui.router', 'dashboard', 'chart'])
	.controller('SidebarController', require('./index/sidebar.controller'))
	.config(require('./config'));		