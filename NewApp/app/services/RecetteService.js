(function () { 
    var newrecipeService = function ($http, $timeout) {
        var result = {
            fetch: function (callback) {
                return $timeout(function() {
                    return $http.get('json/recettes.json').then(function(response) {
                        return response.data;
                    });
                }, 30);
            }
        }
        return result;
        };
   
        //this.getRecette = function () {
        //    $http.get('json/recettes.json').
        //    success(function (data, status, headers, config) {
              
        //       return  result = data;
              
        //        }).
        //        error(function (data, status, headers, config) {
        //            console.log("No data found..");
        //        });           
        //};
   
angular.module('routeApp').service('RecipeService', newrecipeService);
}());

