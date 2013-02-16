//'use strict';
//
//
//// Declare app level module which depends on filters, and services
//angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ui']).
//  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//    $routeProvider.when('/design', {templateUrl: 'partials/designSelector.html', controller: DesignSelectorController});
//    $routeProvider.when('/design/:rangeId', {templateUrl: 'partials/designer.html', controller: DesignerController});
//    $routeProvider.when('/coco', {templateUrl: 'partials/designer.html', controller: DesignerController});
////    $routeProvider.otherwise({redirectTo: '/design'});
//    $locationProvider.html5Mode(true);
//  }]);

'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ui']).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/design', {templateUrl: 'partials/designSelector.html', controller: DesignSelectorController});
    $routeProvider.when('/design/:rangeId', {templateUrl: 'partials/designer.html', controller: DesignerController});
    $routeProvider.otherwise({redirectTo: '/design'});
}]);