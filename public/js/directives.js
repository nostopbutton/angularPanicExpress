'use strict';

/* Directives */
var myDirectives = angular.module('myApp.directives', []);
// TODO - do I still need this?
myDirectives.
    directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
}]);


// TODO - do I still need this?
myDirectives.directive('buttonsRadio', function() {
    return {
        restrict: 'E',
        scope: { model: '=', options:'='},
        controller: function($scope){
            $scope.activate = function(option){
                $scope.model = option;
            };
        },
        template: "<button type='button' class='btn' "+
            "ng-class='{active: option == model}'"+
            "ng-repeat='option in options' "+
            "ng-click='activate(option)'>{{option}} "+
            "</button>"
    };
});