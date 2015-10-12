'use strict';

var _ = require('lodash');

/*@ngInject*/ function DashboardController($interval, PeopleService) {  
  var vm = this;
  vm.myItems = PeopleService.getUsers();
  vm.labels = ["Vasya", "Igor", "Petya", "Sasha", "Epifan"];
  vm.data = [300, 500, 100, 40, 120];
  vm.firstChartType = 'PolarArea';
  
  vm.secondLabels = ["January", "February", "March", "April", "May", "June", "July"];
  vm.secondSeries = ['Vasya', 'Petya'];
  vm.secondData = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  vm.secondChartType = 'Line';
    
  // $interval(function () {
  //   $scope.getLiveChartData();
  // }, 10000);

  vm.getLiveChartData = function getLiveChartData () {
      vm.data.splice(0,1);    
      vm.data.push(vm.getRandomValue(0, 500));  
  }
  
    // $interval(function () {
    //   $scope.getSecondLiveChartData();
    // }, 10000);
  
    vm.getSecondLiveChartData = function () {
        vm.secondData[0].splice(0,1);    
        vm.secondData[0].push(vm.getRandomValue(0, 500));
        vm.secondData[1].splice(0,1);    
        vm.secondData[1].push(vm.getRandomValue(0, 500));  
    }
  
  vm.getRandomValue = function(min, max) {
    return Math.random() * (max - min) + min;
  }

  vm.options = {
    animationEasing: "easeOutCubic",
    pointDot: false,
    scaleShowGridLines : false
  };
 
  vm.removeSelectedElements = function() {
    for (var i = 0; i < vm.mySelectedItems.length; i++) {
      var item = vm.mySelectedItems[i];        
      _.remove(vm.myItems, {
          guid: item.guid
      });
    }      
  };
  };  
  
module.exports = DashboardController;
  
angular
    .module('AngularApp')
        .filter("fullName", function () {
        return function (fieldValueUnused, item) {
            return item.name.first + " " + item.name.last;
        };
    })