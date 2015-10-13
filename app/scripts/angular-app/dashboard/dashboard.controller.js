'use strict';

var _ = require('lodash');

/*@ngInject*/ 
function DashboardController($interval, peopleService) {
  var vm = this;

  vm.myItems = [];
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
  vm.options = {
    animationEasing: "easeOutCubic",
    pointDot: false,
    scaleShowGridLines: false
  };
  vm.getLiveChartData = getLiveChartData;
  vm.getSecondLiveChartData = getSecondLiveChartData;
  vm.getRandomValue = getRandomValue;
  vm.removeSelectedElements = removeSelectedElements;

  activate();

  function activate() {
    $interval(function () {
      vm.getLiveChartData();
    }, 5000);

    $interval(function () {
      vm.getSecondLiveChartData();
    }, 5000);

    vm.myItems = peopleService.getUsers();
  }

  function getLiveChartData() {
    vm.data.splice(0, 1);
    vm.data.push(vm.getRandomValue(0, 500));
  }

  function getSecondLiveChartData() {
    vm.secondData[0].splice(0, 1);
    vm.secondData[0].push(vm.getRandomValue(0, 500));
    vm.secondData[1].splice(0, 1);
    vm.secondData[1].push(vm.getRandomValue(0, 500));
  }

  function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  function removeSelectedElements() {
    for (var i = 0; i < vm.mySelectedItems.length; i++) {
      var item = vm.mySelectedItems[i];
      _.remove(vm.myItems, {
        guid: item.guid
      });
    }
  };
};

module.exports = DashboardController;