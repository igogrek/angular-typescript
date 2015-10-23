'use strict';
/// <reference path="../../../../typings/lodash.d.ts" />

import interfaces = require('../common/interfaces');
import _ = require('lodash');

export class DashboardController {
  
  myItems: any[] = [];
  mySelectedItems: any[] = [];
  labels: string[] = ["Vasya", "Igor", "Petya", "Sasha", "Epifan"];
  data: number[] = [300, 500, 100, 40, 120];
  firstChartType: string = 'PolarArea';
  secondLabels: string[] = ["January", "February", "March", "April", "May", "June", "July"];
  secondSeries: string[] = ['Vasya', 'Petya'];
  secondData: [number[]] = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  secondChartType: string = 'Line';
  options = {
    animationEasing: "easeOutCubic",
    pointDot: false,
    scaleShowGridLines: false
  };

  static $inject = ['$interval', 'peopleService'];

  constructor($interval: ng.IIntervalService, peopleService: interfaces.IPeopleService) {
    $interval(() => {
      if (document.hasFocus())
        this.getLiveChartData();
    }, 5000);

    $interval(() => {
      if (document.hasFocus())
        this.getSecondLiveChartData();
    }, 1000);

    this.myItems = peopleService.getUsers();
  }

  /**
   * Get chart data for first chart
   */
  getLiveChartData() {
    this.data.splice(0, 1);
    this.data.push(this.getRandomValue(0, 500));
  }
  
  /**
   * Get chart data for second chart
   */
  getSecondLiveChartData() {
    this.secondData[0].splice(0, 1);
    this.secondData[0].push(this.getRandomValue(0, 500));
    this.secondData[1].splice(0, 1);
    this.secondData[1].push(this.getRandomValue(0, 500));
  }

  /**
  * Generate random value in range
  * @param min Minimal number to generate value
  * @param max Maximum number to generate value
  * @returns Random number in range
  */
  getRandomValue(min: number, max: number): number {
    return Math.random() * (max - min) + min;;
  }

  /**
  * Remove elements from table
  */
  removeSelectedElements() {
    for (let i = 0; i < this.mySelectedItems.length; i++) {
      let item = this.mySelectedItems[i];
      _.remove(this.myItems, {
        guid: item.guid
      });
    }
  };
};