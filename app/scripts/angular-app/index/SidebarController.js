var SidebarController = 
    function ($scope,$location) {
        $scope.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };
    };        

module.exports = SidebarController;

