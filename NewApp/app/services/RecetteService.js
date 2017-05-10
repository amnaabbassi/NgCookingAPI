(function () { 
    var newrecipeService = function (,$http) {
        var result = [];
        this.getRecette = function () {
            $http.get('json/recettes.json').
            success(function (data, status, headers, config) {
               return  result = data;
          
                }).
                error(function (data, status, headers, config) {
                    console.log("No data found..");
                });
               
        };
   };
angular.module('routeApp').service('RecipeService', newrecipeService);
}());

 