(function () {
    var categorieService = function ($http, $timeout) {
        var result = {
            fetch: function (callback) {
                return $timeout(function () {
                    return $http.get('json/categories.json').then(function (response) {
                        return response.data;
                    });
                }, 30);
            }
        }
        return result;
    };
    angular.module('routeApp').service('CategorieService', categorieService);
}());