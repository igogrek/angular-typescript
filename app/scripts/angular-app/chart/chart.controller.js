'use strict';

/*@ngInject*/
function ChartController($interval) {
  var vm = this;

  vm.data = [[]];
  vm.labels = [];
  vm.options = { 
    animation: false,
    animationSteps: 10,
    animationEasing: "linear",
    showTooltips: false,
    pointDot: false,
    datasetStrokeWidth: 0.5,
    scaleOverride: true,
    scaleStartValue: 0, 
    scaleStepWidth: 10,
    scaleSteps: 10
  };
  vm.played = true;
  vm.getLiveChartData = getLiveChartData;
  vm.getRandomValue = getRandomValue;

  activate();

  function activate() {    
    // Update the dataset for a smoothly-animating chart
    $interval(function () {
      if (vm.played)
        vm.getLiveChartData();
    }, 40);
  }

  function getLiveChartData() {
    if (vm.data[0].length) {
      vm.labels = vm.labels.slice(1);
      vm.data[0] = vm.data[0].slice(1);
    }
    while (vm.data[0].length < 30) {
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