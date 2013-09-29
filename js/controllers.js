'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('BeerController', function($scope, $http) {

    var cervejas = [{name: "Cerveja 01", type: "Cerveja 01", description: "Cerveja 01"}, 
    {name: "Cerveja 02", type: "Cerveja 02", description: "Cerveja 02"},
    {name: "Cerveja 03", type: "Cerveja 03", description: "Cerveja 03"}];
    $scope.cervejas = cervejas;
  });