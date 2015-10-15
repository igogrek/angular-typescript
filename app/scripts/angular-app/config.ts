'use strict';

export = Config;

/*@ngInject*/ 
function Config($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });                                 
};