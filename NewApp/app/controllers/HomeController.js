(function () {


    var HomeCtrl = function ($scope, $cookies, $http) {
        $http.get('json/recettes.json').
       success(function (data, status, headers, config) {
           $scope.recettes = data;
           var cookienow = $cookies.get('Name');
           $scope.message = cookienow;
           $scope.number = data.length;
       }).
       error(function (data, status, headers, config) {
           console.log("No data found..");
       });
    };
angular.module('routeApp').controller('homeCtrl', HomeCtrl);

}());