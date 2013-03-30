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

//myServices.
//    service('analytics', function($rootScope, $window, $location, $routeParams) {
//
//    $rootScope.$on('$viewContentLoaded', track);
//
//    var track = function() {
//        var path = convertPathToQueryString($location.path(), $routeParams)
//        $window._gaq.push(['_trackPageview', path]);
//    };
//
//    var convertPathToQueryString = function(path, $routeParams) {
//        for (var key in $routeParams) {
//            var queryParam = '/' + $routeParams[key];
//            path = path.replace(queryParam, '');
//        }
//
//        var querystring = decodeURIComponent($.param($routeParams));
//
//        if (querystring === '') return path;
//
//        return path + "?" + querystring;
//    };
//});


