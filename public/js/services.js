'use strict';

/* Services */

var myServices = angular.module('myApp.services', ['ngResource']);

// Demonstrate how to register services
// In this case it is a simple value service.
myServices.
    value('version', '0.1');

myServices.
    factory('Range', function($resource){
        return $resource('ranges/:rangeId.json', {}, {
            query: {method:'GET', params:{rangeId:'ranges'}, isArray:true},
            querySilhouettes: {method:'GET', params:{rangeId:'silhouettes'}, isArray:true}
        });
    });

