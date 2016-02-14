'use strict';

import * as _ from 'lodash';

export class SidebarController {
        
    possibleNavs: INav[] = [{name:'dashboard'}, {name:'chart'}, {name: 'highcharts'}];
    navs: INav[] = [];

    static $inject = ['$location','$state', 'customModules'];

    constructor(private $location: ng.ILocationService, $state: angular.ui.IStateService, customModules: string[]) {
        // Check all existing states and compare with possible navs 
        let allStates = $state.get();
        _.forEach(customModules, (nav) => {
            if(_.some(allStates, {name:nav})) {
                // Show if state exists
                this.navs.push({name:nav});
            }
        });    
    }

    /**
    * Compare current location with nav name to set active class
    * @param nav nav to check
    * @returns true if location is the same as nav name
    */
    isActive(nav: INav) : boolean {                
        let viewLocation = '/' + nav.name;
        return viewLocation === this.$location.path();
    }
}

interface INav {
	 name: string;
}