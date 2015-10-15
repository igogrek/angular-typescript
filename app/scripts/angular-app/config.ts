'use strict';

export = Config;

class Config{
    
    static $inject = ['$locationProvider'];
    
    constructor($locationProvider: ng.ILocationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });          
    }                       
};