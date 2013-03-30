// TODO - what is locationProvider for? do we need it?
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
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ui', 'analytics']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when(
            '/', {templateUrl: 'partials/homePartial.html', controller: StaticPageController});
        $routeProvider.when(
            '/collection', {templateUrl: 'partials/collection.html', controller: CollectionController});
        $routeProvider.when(
            '/design', {templateUrl: 'partials/silhouettes.html', controller: SilhouetteController});
        $routeProvider.when(
            '/design/:rangeId', {templateUrl: 'partials/designBuild.html', controller: DesignBuildController});
        $routeProvider.when(
            '/gallery', {templateUrl: 'partials/gallery.html', controller: StaticPageController});
        $routeProvider.when(
            '/fabrics', {templateUrl: 'partials/fabrics.html', controller: StaticPageController});
        $routeProvider.when(
            '/party', {templateUrl: 'partials/party.html', controller: StaticPageController});
        $routeProvider.when(
            '/contact', {templateUrl: 'partials/contact.html', controller: StaticPageController});
        $routeProvider.when(
            '/about', {templateUrl: 'partials/about.html', controller: StaticPageController});

        $routeProvider.when(
            '/adminCollection', {templateUrl: 'partials/adminCollection.html', controller: CollectionController});
        $routeProvider.when(
            '/adminCollection/:rangeId', {templateUrl: 'partials/adminRangeDetails.html', controller: RangeDetailsController});

        $routeProvider.otherwise({redirectTo: '/'});
    }]);