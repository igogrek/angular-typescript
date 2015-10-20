'use strict';

import angular = require('angular');

require('../angular-ui/angular-ui-router');
require('./dashboard/dashboard.module');
require('./chart/chart.module');

require('./index/tests');

console.log('asd');

angular.module('AngularApp', ['ui.router', 'dashboard', 'chart'])
	.controller('SidebarController', require('./index/sidebar.controller').SidebarController)
	.config(require('./config').Config);		