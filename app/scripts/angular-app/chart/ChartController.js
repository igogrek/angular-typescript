'use strict';

/*@ngInject*/ function ChartController($interval) {
  var vm = this;
  
  var maximum = document.getElementById('chartContainer').clientWidth / 2 || 300;
  vm.data = [[]];
  vm.labels = [];
  vm.options = {
    animation: false,
    showScale: false,
    showTooltips: false,
    pointDot: false,
    datasetStrokeWidth: 0.5
  };
  // Update the dataset at 25FPS for a smoothly-animating chart
  vm.getLiveChartData = function () {
    if (vm.data[0].length) {
      vm.labels = vm.labels.slice(1);
      vm.data[0] = vm.data[0].slice(1);
    }

    while (vm.data[0].length < maximum) {
      vm.labels.push('');
      vm.data[0].push(vm.getRandomValue(vm.data[0]));
    }
  }
  vm.getRandomValue = function getRandomValue (data) {
    var l = data.length, previous = l ? data[l - 1] : 50;
    var y = previous + Math.random() * 10 - 5;
    return y < 0 ? 0 : y > 100 ? 100 : y;
  }
  
  $interval(function () {
    vm.getLiveChartData();
  }, 40);
};
module.exports = ChartController;