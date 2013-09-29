'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('BeerController', function($scope, $http) {
    $scope.cerveja = "Baden Baden";
  });