'use strict';

import _ = require('lodash');

export class SidebarController {
        
    possibleNavs: INav[] = [{name:'dashboard'}, {name:'chart'}];
    navs: INav[] = [];

    static $inject = ['$location','$state'];

    constructor(private $location: ng.ILocationService, $state: angular.ui.IStateService) {
        // Check all existing states and compare with possible navs 
        let allStates = $state.get();
        _.forEach(this.possibleNavs, (nav) => {
            if(_.some(allStates, nav)) {
                // Show if state exists
                this.navs.push(nav);
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