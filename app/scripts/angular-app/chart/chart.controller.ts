'use strict';

class ChartController {

  data = [[]];
  labels = [];
  options = {
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
  played: boolean = s;

  static $inject = ['$interval'];

  constructor($interval: ng.IIntervalService) {
    $interval(() => {
      if (this.played)
        this.getLiveChartData();
    }, 40);
  }

  getLiveChartData() {
    if (this.data[0].length) {
      this.labels = this.labels.slice(1);
      this.data[0] = this.data[0].slice(1);
    }
    while (this.data[0].length < 30) {
      this.labels.push('');
      this.data[0].push(this.getRandomValue(this.data[0]));
    }
  }

  getRandomValue(data): number {
    let l = data.length, previous = l ? data[l - 1] : 50;
    let y = previous + Math.random() * 10 - 5;
    return y < 0 ? 0 : y > 100 ? 100 : y;
  }
};

export = ChartController;