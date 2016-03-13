'use strict';

angular
    .module('sample-notificator', [])
    .directive('sampleNotificator', ['$timeout', function($timeout) {
        return {
            template:
            `<div class="sample-notification-container">
                <div class="alert alert-dismissible fade" 
                ng-class="[getClass(notification.category), {in: notification.isShown}]" 
                ng-repeat="notification in notifications" ng-init='notification.count = 0'> 
                    <button type="button" class="close" ng-click="dismiss(notification)"><span>×</span></button> 
                    <strong  ng-if='notification.count'>{{notification.count}}</strong> 
                    <strong ng-if='!notification.count'>{{notification.header}}</strong> 
                    <p>{{notification.content}}</p>
                    <p ng-if="notification.type != 'note'"> 
                        <button type="button" class="btn btn-primary" ng-click="dismiss(notification, 1)">Ok</button> 
                        <button type="button" class="btn btn-danger" ng-if="notification.type == 'ok_cancel_confirm'" ng-click="dismiss(notification, 0)">Cancel</button> 
                    </p>
                </div>
            </div>`,
            scope: true,
            restrict: 'E',
            controller: ['$scope', function($scope) {
                $scope.notifications = [];
                $scope.newNotification = function(notification) {
                    $scope.notifications.push(notification);
                    if ($scope.notifications.length > 5) {
                        $scope.notifications.splice(1, 1);
                        $scope.notifications[0].category = 'combined';
                        $scope.notifications[0].type = 'note';
                        $scope.notifications[0].count += 1;
                        $scope.notifications[0].content = ' missed notifications';
                    };
                    $timeout(function() {
                        notification.isShown = true;
                    });
                };
                $scope.dismiss = function(notification, result) {
                    notification.isShown = false;
                    $timeout(function() {
                        var index = $scope.notifications.indexOf(notification);
                        $scope.notifications.splice(index, 1);
                    }, 300);
                    if (result != undefined && notification.resultCallback)
                        notification.resultCallback(result);
                };
                $scope.getClass = function(category) {
                    var className = 'alert-info'
                    if (category == 'warning') {
                        className = 'alert-warning';
                    } else if (category == 'error') {
                        className = 'alert-danger';
                    } else if (category == 'combined') {
                        className = 'alert-success';
                    }
                    return className;
                }
            }]
        };
    }])
    .service('sampleNotificatorService', ['$timeout', function($timeout) {

        var sampleNotificator = {};

        sampleNotificator.notify = function(content, header, category, type, callback) {
            var options = {
                content: content || 'Sample notification',
                header: header,
                category: category,
                type: type || 'note',
                resultCallback: callback
            };

            $timeout(function() {
                var directiveScope = angular.element(document).find('sample-notificator').scope();
                directiveScope.newNotification(options);
                $timeout(function() {
                    directiveScope.dismiss(options);
                }, 90000);
            });
        };

        return sampleNotificator;

    }]);
