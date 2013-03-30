'use strict';

<<<<<<< HEAD
function StaticPageController($scope) {
//function StaticPageController($scope, analytics) {
=======
function StaticPageController($rootScope, $window, $location, $routeParams) {// $rootScope, $window, $location, $routeParams
>>>>>>> new_branch_name
    // Nothing to do yet.
    $rootScope.$on('$viewContentLoaded', track($window, $location, $routeParams));
}
<<<<<<< HEAD
StaticPageController.$inject = ['$scope'];
//StaticPageController.$inject = ['$scope', 'analytics'];

//function CollectionController($scope, analytics, Range) {
function CollectionController($scope, Range) {
    $scope.ranges = Range.query();
}
//CollectionController.$inject = ['$scope', 'analytics', 'Range'];
CollectionController.$inject = ['$scope', 'Range'];

//function RangeDetailsController($scope, analytics, $routeParams, Range) {
function RangeDetailsController($scope, $routeParams, Range) {
    $scope.ranges = Range.query();
    $scope.range = Range.get({rangeId : $routeParams.rangeId});
}
RangeDetailsController.$inject = ['$scope', '$routeParams', 'Range'];
//RangeDetailsController.$inject = ['$scope', 'analytics', '$routeParams', 'Range'];

//function SilhouetteController($scope, analytics, Range) {
function SilhouetteController($scope, Range) {
    $scope.silhouettes = Range.querySilhouettes();
}
SilhouetteController.$inject = ['$scope', 'Range'];
//SilhouetteController.$inject = ['$scope', 'analytics', 'Range'];
=======

StaticPageController.$inject = ['$rootScope', '$window', '$location', '$routeParams'];

function CollectionController($scope, Range
        , $rootScope, $window, $location, $routeParams) {
    $rootScope.$on('$viewContentLoaded', track($window, $location, $routeParams));
    $scope.ranges = Range.query();
}
CollectionController.$inject = ['$scope', 'Range'
        , '$rootScope', '$window', '$location', '$routeParams'];

function RangeDetailsController($scope, $routeParams, Range
        , $rootScope, $window, $location) {
    $rootScope.$on('$viewContentLoaded', track($window, $location, $routeParams));
    $scope.ranges = Range.query();
    $scope.range = Range.get({rangeId : $routeParams.rangeId});
}
RangeDetailsController.$inject = ['$scope', '$routeParams', 'Range'
        , '$rootScope', '$window', '$location', '$routeParams'];

function SilhouetteController($scope, Range
        , $rootScope, $window, $location, $routeParams) {
    $rootScope.$on('$viewContentLoaded', track($window, $location, $routeParams));
    $scope.silhouettes = Range.querySilhouettes();
}
SilhouetteController.$inject = ['$scope', 'Range'
        , '$rootScope', '$window', '$location', '$routeParams'];
>>>>>>> new_branch_name

//// TODO - do I need this?
//function AppCtrl($scope, $http) {
//    $http({method: 'GET', url: '/api/name'}).
//        success(function(data, status, headers, config) {
//            $scope.name = data.name;
//        }).
//        error(function(data, status, headers, config) {
//            $scope.name = 'Error!'
//        });
//}
//AppCtrl.$inject = ['$scope', '$http'];

<<<<<<< HEAD
function DesignBuildController($scope, $routeParams, Range) {
//function DesignBuildController($scope, analytics, $routeParams, Range) {
=======
function DesignBuildController($scope, $routeParams, Range
        , $rootScope, $window, $location) {
    $rootScope.$on('$viewContentLoaded', track($window, $location, $routeParams));
>>>>>>> new_branch_name
    var master="";
    $scope.ranges = Range.query();
    $scope.range = Range.get({rangeId: $routeParams.rangeId},
        function (data) {   //success
            master = angular.copy(data.default);
            $scope.master = master; // so it can be viewed in debug screen
            $scope.cancel(); // set form to master
        },
        function (data) {   //failure
            alert("ooops");
    });

    $scope.cancel = function() {
        $scope.form = angular.copy(master);
    };

    $scope.save = function() {
        master = $scope.form;
        $scope.cancel();
    };

    $scope.isCancelDisabled = function() {
        return angular.equals(master, $scope.form);
    };

//    $scope.isSaveDisabled = function() {
//        return $scope.form.$invalid || angular.equals(master, $scope.form);
//    };

//    $scope.cancel();
}
<<<<<<< HEAD
DesignBuildController.$inject = ['$scope', '$routeParams', 'Range'];
//DesignBuildController.$inject = ['$scope', 'analytics', '$routeParams', 'Range'];
=======
DesignBuildController.$inject = ['$scope', '$routeParams', 'Range'
        , '$rootScope', '$window', '$location'];




var track = function($window, $location, $routeParams) {
    console.log("in track");
    var path = convertPathToQueryString($location.path(), $routeParams)
    $window._gaq.push(['_trackPageview', path]);
};

var convertPathToQueryString = function(path, $routeParams) {
    for (var key in $routeParams) {
        var queryParam = '/' + $routeParams[key];
        path = path.replace(queryParam, '');
    }

    var querystring = decodeURIComponent($.param($routeParams));

    if (querystring === '') return path;

    return path + "?" + querystring;
};
>>>>>>> new_branch_name
