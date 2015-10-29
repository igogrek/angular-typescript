'use strict';

export class HighchartsController {
  currentChartType: number = 0;
  chartTypes: string[] = ['bar', 'line', 'area', 'spline', 'areaspline', 'column', 'pie', 'scatter'];
  chartConfig = {
    options: {
      //This is the Main Highcharts chart config. Any Highchart options are valid here.
      //will be overriden by values specified below.
      chart: {
        type: 'line',
        zoomType: 'x'
      },
      tooltip: {
        style: {
          padding: 10,
          fontWeight: 'bold'
        }
      }
    },

    series: [{
      data: [10, 15, 12, 8, 7, 10, 15, 12, 8, 7]
    }],
    title: {
      text: 'Highcharts test'
    },    
    //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
    //properties currentMin and currentMax provied 2-way binding to the chart's maximum and minimum
    xAxis: {
      currentMin: 0,
      currentMax: 9,
      minRange: 0.1,
      title: { text: 'values' }
    }
  };

  static $inject = ['$timeout'];

  constructor(private $timeout: ng.ITimeoutService) {

  }

  addSeries() {
    var rnd = []
    for (var i = 0; i < 10; i++) {
      rnd.push(Math.floor(Math.random() * 20) + 1)
    }
    this.chartConfig.series.push({
      data: rnd
    })
  }

  addPoints() {
    var seriesArray = this.chartConfig.series
    var rndIdx = Math.floor(Math.random() * seriesArray.length);
    seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
  };

  removeRandomSeries() {
    var seriesArray = this.chartConfig.series
    var rndIdx = Math.floor(Math.random() * seriesArray.length);
    seriesArray.splice(rndIdx, 1)
  }

  swapChartType() {
    this.chartConfig.options.chart.type = this.chartTypes[this.currentChartType++ % this.chartTypes.length];
  }
};