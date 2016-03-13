'use strict';

import * as angular from 'angular';

import 'angular-ui-router';
import {NotifyTestController} from './notifyTest.controller';
import {NotifyTestConfig} from './notifyTest.config';

import '../../sample-notificator/sample-notificator.css';
import '../../sample-notificator/sample-notificator.js';

export = angular.module('notifyTest', ['ui.router','sample-notificator'])
	.controller('NotifyTestController', NotifyTestController)
	.config(NotifyTestConfig);