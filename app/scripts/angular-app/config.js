'use strict';

/*@ngInject*/ 
function Config($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });                                 
};
module.exports = Config;