(function () {
    var ingredientService = function ($http, $timeout) {
        var result = {
            fetch: function (callback) {
                return $timeout(function () {
                    return $http.get('json/ingredients.json').then(function (response) {
                        return response.data;
                    });
                }, 30);
            }
        }
        return result;
    };
    angular.module('routeApp').service('IngredientService', ingredientService);
}());