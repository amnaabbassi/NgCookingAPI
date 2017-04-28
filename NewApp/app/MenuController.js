var routeApp = angular.module('routeApp', ['ngRoute']
    );

routeApp.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: 'partiels/home.html',
        controller: 'homeCtrl'
    })
    .when("/recettes", {
        templateUrl: 'partiels/recipe.html',
        controller: 'recetteCtrl'
    })
    .when("/ingredients", {
        templateUrl: 'partiels/ingredient.html',
        controller: 'ingredientCtrl'
    })
    .when("/communaute", {
        templateUrl: 'partiels/communautes.html',
        controller: 'communauteCtrl'

    })
     .when("/new/:id", {
         templateUrl: 'partiels/recette_new.html',
         controller: 'recette_newCtrl'
     })
    .when("/details", {
        templateUrl: 'partiels/recette_detail.html',
        controller: 'recette_detailsCtrl'
    });
}); 

routeApp.controller('homeCtrl',function ($scope, $http) {
    $http.get('json/recettes.json').
   success(function (data, status, headers, config) {
       $scope.recettes = data;
   }).
   error(function (data, status, headers, config) {
       console.log("No data found..");
   });
    }
);
routeApp.controller('recetteCtrl', function ($scope, $http) {
    $http.get('json/recettes.json').
   success(function (data, status, headers, config) {
       $scope.recettes = data;
   }).
   error(function (data, status, headers, config) {
       console.log("No data found..");
   });
});
routeApp.controller('ingredientCtrl', function ($scope , $http) {
    $http.get('json/ingredients.json', 'json/categories.json').
    success(function (data, status, headers, cinfig) {
        $scope.ing = data;
         
    }).
    error(function (data, status, headers, config) {
        console.log("No data found..");
    });

    });
routeApp.controller('communauteCtrl', function($scope, $http){
    $http.get('json/communaute.json').
    success(function(data,status,headers,cinfig)
    {
        $scope.communautes = data  ;
  }).
    error(function(data, status,headers,config)
    {
        console.log("No data found..");
    });
});
routeApp.controller('recette_newCtrl', function ($scope, $routeParams, $http) {
    $http.get('json/recettes').
        success(function (data, status, headers, cinfig) {
            $scope.param = $routeParams.param;
            $scope.recettes = data;
           
        }).
    error(function (data, status, headers, config) {
        console.log("No data found..");
    });
       
    }
);
routeApp.controller('recette_detailsCtrl', ['$scope',
    function ($scope) {

    }
]);
routeApp.controller('CatagoryCtrl', function ($scope, $http) {
    $http.get('json/categories.json').
    success(function (data, status, headers, config) {
        $scope.category = data;
    })

});
routeApp.filter('searchFor', function()
{
    return function (arr, searchName) {
        if (!searchName) {
            return arr;
        }
        var result = [];

        searchName = searchName.toLowerCase();

        angular.forEach(arr, function (item) {
            if (item.name.toLowerCase().indexOf(searchName) !== -1) {
                result.push(item);
            }
        });
        return result;
    };
});

routeApp.controller('CommentCtrl', function ($scope, $http) {
    $http.get('json/recettes').
    success(function (data, status, headers, config) {
        $scope.ingredients = data;
    })
});
