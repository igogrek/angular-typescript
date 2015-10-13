'use strict';

/*@ngInject*/ 
function ChartController($interval) {
  var vm = this;
  
  vm.data = [[]];
  vm.labels = [];
  vm.options = {
    animation: false,
    showScale: false,
    showTooltips: false,
    pointDot: false,
    datasetStrokeWidth: 0.5
  };
  vm.getLiveChartData = getLiveChartData; 
  vm.getRandomValue = getRandomValue;
  
   // Update the dataset for a smoothly-animating chart
  $interval(function () {
    vm.getLiveChartData();
  }, 40);
  
  var maximum = document.getElementById('chartContainer').clientWidth / 2 || 300;
  function getLiveChartData () {
    if (vm.data[0].length) {
      vm.labels = vm.labels.slice(1);
      vm.data[0] = vm.data[0].slice(1);
    }
    while (vm.data[0].length < maximum) {
      vm.labels.push('');
      vm.data[0].push(vm.getRandomValue(vm.data[0]));
    }
  }
    
  function getRandomValue(data) {
    var l = data.length, previous = l ? data[l - 1] : 50;
    var y = previous + Math.random() * 10 - 5;
    return y < 0 ? 0 : y > 100 ? 100 : y;
  }
};

module.exports = ChartController;