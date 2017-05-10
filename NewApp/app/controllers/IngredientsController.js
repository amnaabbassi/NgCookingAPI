(function () {
    var IngredientCtrl = function ($scope, IngredientService, CategorieService) {
        IngredientService.fetch().then(function (data) {
            $scope.ing = data;
            CategorieService.fetch().then(function (data) {
                $scope.categories = data;
            });
        });
    };
    angular.module('routeApp').controller('ingredientCtrl', IngredientCtrl);

}());