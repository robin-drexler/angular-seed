'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
    .directive('vote', function() {
        var definition = {
            restrict: 'E',
            replace: true,
            template: '<div ng-click="increase()" style="width: 50px; height:  50px; border:  1px solid black;">{{count}}</div>',
            scope: {
                count: '=',
                onChange: '&'
            },
            controller: ['$scope', '$timeout', function($scope, $timeout) {
                $scope.increase = function() {
                    $scope.count += 1;
                    $timeout($scope.onChange);
                }
            }]
        }

        return definition;
    });
