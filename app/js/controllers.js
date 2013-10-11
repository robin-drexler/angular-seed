'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('ListController', ['$scope', 'interestResource', function ($scope, interestResource) {
        interestResource.query(
            function (r) {
                $scope.interests = r;
            }
        );
    }])
    .controller('MyCtrl2', [function () {

    }]);