'use strict';

export class DynamicNav implements ng.IDirective {
	restrict = 'EA';
	template = `<li ng-class="{ active: nav.active}" ng-repeat="nav in navs"><a class="nav-capitalize" ui-sref="{{nav.name}}">{{nav.name}}</a></li>`;
	scope = {
		navs: "="
	};

	static $inject = ['$location'];
	static instance($location: ng.ILocationService): ng.IDirective {
		return new DynamicNav($location);
	}

	constructor(private $location: ng.ILocationService) {

	}

	link = (scope: ng.IScope, element: ng.IAugmentedJQuery) => {
		let directive = this;

		for (var nav of scope["navs"]) { 
			if (('/' + nav.name) === directive.$location.path())
				nav.active = true;
		}
	}
}