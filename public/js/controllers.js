'use strict';

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

function DesignerController($scope, $routeParams, Range) {
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

//    var master = {
//        view: 'front',
//
//        bodice: {
//            type: 'bodice-01',
//            fabric: 'c01'
//        },
//        skirt: {
//            type: 'skirt-01',
//            fabric: 'c01'
//        },
//        sleeves: {
//            type: 'sleeves-01',
//            fabric: 'c01'
//        },belt: {
//            type: 'belt-01',
//            fabric: 'c01'
//        }
//    }


    $scope.cancel = function() {
        $scope.form = angular.copy(master);
//        $route.reload();
    };

    $scope.save = function() {
        master = $scope.form;
        $scope.cancel();
    };

    $scope.isCancelDisabled = function() {
        return angular.equals(master, $scope.form);
    };

    $scope.isSaveDisabled = function() {
        return $scope.form.$invalid || angular.equals(master, $scope.form);
    };

//    $scope.cancel();
}
DesignerController.$inject = ['$scope', '$routeParams', 'Range'];


function DesignSelectorController($scope, Range) {
    $scope.ranges = Range.query();
}
DesignSelectorController.$inject = ['$scope', 'Range'];
