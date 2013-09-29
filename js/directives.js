'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('testElem', function () {
    return {
        restrict: 'EA',
        template: '<div class="mydirectiveclass"><h1>hello...</h1><ul><li ng-repeat="obj in arr">{{obj}}</li></ul></div>',
        //templateUrl: '/partials/template.html',
        link: function (scope, iterStartElement, attr) {
            $(".mydirectiveclass").css({'background-color' : 'yellow'});
            scope.arr = ["angularjs", "eh", "mto", "bao", "docarai"];
        }
    };
});