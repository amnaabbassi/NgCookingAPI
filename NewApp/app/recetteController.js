var recetteApp = angular.module('recetteApp', []);
recetteApp.controller('recetteCtrl', function ($scope, $http) {
    $http.get('json/recettes.json').
       success(function (data, status, headers, config) {
           $scope.recettes = data;
       }).
       error(function (data, status, headers, config) {
           console.log("No data found..");
       });
  

});
