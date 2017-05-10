(function () {


    var IngredientCtrl = function ($scope, $http) {
        $http.get('json/ingredients.json').
        success(function (data, status, headers, cinfig) {
            $scope.ing = data;
            $http.get('json/categories.json').
                 success(function (data, status, headers, cinfig) {
                     $scope.categories = data;
                 }).
                    error(function (data, status, headers, config) {
                        console.log("No data found..");
                    });
        }).
        error(function (data, status, headers, config) {
            console.log("No data found..");
        });
    };
    angular.module('routeApp').controller('ingredientCtrl', IngredientCtrl);

}());