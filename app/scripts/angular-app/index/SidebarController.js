var SidebarController = function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
};

SidebarController.$inject = ['$scope', '$location'];
module.exports = SidebarController;