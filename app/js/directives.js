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
            template: '<div style="width: 50px; height:  50px; border:  1px solid black;"></div>',
            link: function(scope, elm) {
                elm.text(33);
            }
        }

        return definition;
    });
