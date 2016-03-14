'use strict';

angular
    .module('sample-notificator', [])
/**
* @ngdoc directive
* @name directive:sampleNotificator
* @restrict E
*
* @description
* Base directive to contatin all of the notifications. Must be placed somewhere on the page.
*/
    .directive('sampleNotificator', ['$timeout', function ($timeout) {
        return {
            template:
            '<div class="sample-notification-container">' +
            '<div class="alert alert-dismissible fade"' +
            'ng-class="[getClass(notification.category), {in: notification.isShown}]"' +
            'ng-repeat="notification in notifications" ng-init="notification.count = 0">' +
            '<button type="button" class="close" ng-click="dismiss(notification)"><span>×</span></button>' +
            '<strong  ng-if="notification.count">{{notification.count}}</strong>' +
            '<strong ng-if="!notification.count">{{notification.header}}</strong>' +
            '<p>{{notification.content}}</p>' +
            '<p ng-if="notification.type != \'note\'">' +
            '<button type="button" class="btn btn-primary" ng-click="dismiss(notification, 1)">Ok</button>' +
            '<button type="button" class="btn btn-danger" ng-if="notification.type == \'ok_cancel_confirm\'" ng-click="dismiss(notification, 0)">Cancel</button>' +
            '</p>' +
            '</div>' +
            '</div>',
            scope: true,
            restrict: 'E',
            controller: ['$scope', function ($scope) {
                $scope.notifications = [];
                $scope.newNotification = function (notification) {
                    $scope.notifications.push(notification);
                    if ($scope.notifications.length > 5) {
                        $scope.notifications.splice(1, 1);
                        $scope.notifications[0].category = 'combined';
                        $scope.notifications[0].type = 'note';
                        $scope.notifications[0].count += 1;
                        $scope.notifications[0].content = ' missed notifications';
                    }
                    $timeout(function () {
                        notification.isShown = true;
                    });
                };
                $scope.dismiss = function (notification, result) {
                    notification.isShown = false;
                    $timeout(function () {
                        var index = $scope.notifications.indexOf(notification);
                        $scope.notifications.splice(index, 1);
                    }, 300);
                    if (result !== undefined && notification.resultCallback)
                        notification.resultCallback(result);
                };
                $scope.getClass = function (category) {
                    var className = 'alert-info';
                    if (category == 'warning') {
                        className = 'alert-warning';
                    } else if (category == 'error') {
                        className = 'alert-danger';
                    } else if (category == 'combined') {
                        className = 'alert-success';
                    }
                    return className;
                };
            }]
        };
    }])
/**
* @ngdoc service
* @name service:sampleNotificatorService
* @description
* Service to use for notifications in conjunction with {@link directive:sampleNotificator sampleNotificator}
*/
    .service('sampleNotificatorService', ['$timeout', function ($timeout) {
        var sampleNotificator = {};       
        /**
         * @ngdoc method
         * @name notify
         * @methodOf service:sampleNotificatorService
         * @description
         * Main notification method
         * 
         * @example
         * sampleNotificatorService.notify('Message!', 'Header', 'warning', 'ok_cancel_confirm', function(result){console.log(result);})
         *
         * @param {string} body Notification body. Default is 'Sample notification'
         * @param {string} header Notification header
         * @param {string} category Notification category. Possible values are 'info','warning' and 'error'. Default is 'info'
         * @param {string} type Notification type. Possible values are 'ok_confirm','ok_cancel_confirm' and 'note'. Default is 'note'
         * @param {function} callback Callback to use with confirmation result. Signature: function(result) result for Ok is 1 and Cancel is 0
         * 
         */
        sampleNotificator.notify = function (content, header, category, type, callback) {
            var options = {
                content: content || 'Sample notification',
                header: header,
                category: category,
                type: type || 'note',
                resultCallback: callback
            };
            $timeout(function () {
                var directiveScope = angular.element(document).find('sample-notificator').scope();
                directiveScope.newNotification(options);
                $timeout(function () {
                    directiveScope.dismiss(options);
                }, 90000);
            });
        };
        return sampleNotificator;
    }]);
