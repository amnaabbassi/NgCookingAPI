(function () {


    var recipeCtrl = function ($scope, RecipeService) {
       RecipeService.fetch().then(function(data){
       $scope.recettes = data;
        })
};
    angular.module('routeApp').controller('recetteCtrl', recipeCtrl);

    var newrecipeCtrl = function ($scope, RecipeService) {
        RecipeService.fetch().then(function (data) {
            $scope.recettes = data;
        })
};
    angular.module('routeApp').controller('recette_newCtrl', newrecipeCtrl);
    
    var detailsrecipe = function ($scope, $routeParams, $http) {
        $http.get('json/recettes.json').
         success(function (data, status, headers, config) {

             $scope.recette = data.find(
               x => {
                   return x.id == $routeParams.id;
               });

             var result = [];
             var sum;
             $http.get('json/communaute.json').success(function (data, status, headers, config) {
                 angular.forEach($scope.recette.comments, function (comment) {
                     var user = data.find(x => {
                         return x.id == comment.userId;
                     })

                     comment.firstName = user.firstname;
                     comment.surName = user.surname;
                     comment.id = user.id;
                     result.push(comment);
                 })

                 $scope.recette.comments1 = result;

             }).error(function (data, status, headers, config) {
                 console.log("No data found..");
             });

         }).error(function (data, status, headers, config) {
             console.log("No data found..");
         });
    };
    angular.module('routeApp').controller('recette_detailsCtrl', detailsrecipe);

}());