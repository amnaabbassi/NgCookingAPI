var routeApp = angular.module('routeApp', ['ngRoute', 'ngFileUpload', 'ngCookies']

  
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
     .when("/new", {
         templateUrl: 'partiels/recette_new.html',
         controller: 'recette_newCtrl'
     })
    .when("/details/:id", {
        templateUrl: 'partiels/recette_detail.html',
        controller: 'recette_detailsCtrl'
    })
    .when("/detailsCommunaute/:idCommunaute", {
        templateUrl: 'partiels/communaute_details.html',
        controller: 'communaute_detailsCtrl'
    })
    .when("/login", {
        templateUrl: 'partiels/Login.html',
        controller: 'loginCtrl'
    });
}); 

routeApp.controller('homeCtrl',function ($scope,$cookies, $http) {
    $http.get('json/recettes.json').
   success(function (data, status, headers, config) {
       $scope.recettes = data;
       $cookies.put('hello', 'gbhfgh');
       var favoriteCookie = $cookies.get('hello', 'gbhfgh');
       $scope.message = favoriteCookie;

   }).
   error(function (data, status, headers, config) {
       console.log("No data found..");
   });
   
});
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
routeApp.controller('recette_newCtrl', function ($scope, $http) {
    $http.get('json/recettes.json').
        success(function (data, status, headers, cinfig) {
             $scope.recettes = data;           
        }).
    error(function (data, status, headers, config) {
        console.log("No data found..");
    });
           
    }
);
routeApp.controller('recette_detailsCtrl', function ($scope, $routeParams, $http) {

    $http.get('json/recettes.json').
     success(function (data, status, headers, cinfig) {
         $scope.recette = data.find(
           x => {
               return x.id == $routeParams.id;
           });


     }).
    error(function (data, status, headers, config) {
        console.log("No data found..");
    });
});
routeApp.controller('communaute_detailsCtrl', function ($scope, $routeParams, $http) {
  
    $http.get('json/communaute.json').
     success(function (data, status, headers, cinfig) {
         $scope.communaute = data.find(
           x => {
               return x.id == $routeParams.idCommunaute;
         });
         
       
         }).
    error(function (data, status, headers, config) {
    console.log("No data found..");
    });
   });

routeApp.controller('CatagoryCtrl', function ($scope, $http) {
    $http.get('json/categories.json').
    success(function (data, status, headers, config) {
        $scope.category = data;
    })

});
routeApp.filter('searchFor', function()
{
    return function (arr, searchName) {
        if (!searchName ) {
            return arr;
        }
        var result = [];
       

        searchName = searchName.toLowerCase();
       
      
        angular.forEach(arr, function (item) {
            if (item.name.toLowerCase().indexOf(searchName) !== -1 ) {
                result.push(item );
            }
        });
        return result;
    };
});

routeApp.controller('CommentCtrl', function ($scope, $http) {
    $http.get('json/recettes.json').
    success(function (data, status, headers, config) {
        $scope.recette = data;
    })
});

routeApp.controller('uploadImage',['$scope', '$http', '$timeout', '$compile', 'Upload',
     function($scope, $http, $timeout, $compile, Upload) {
         $scope.onChange = function (files) {
         if (files[0] == undefined) return;
         $scope.fileExt = files[0].name.split(".").pop()
     }
         $scope.isImage = function (ext) {
             if (ext) {
                 return ext == "jpg" || ext == "jpeg" || ext == "gif" || ext == "png"
             }
         }
     }]);


routeApp.filter('searchCat', function () {
    return function (arr, category) {
        if (!category) {
            return arr;
        }
        var result = [];


       
        category = category.toLowerCase();

        angular.forEach(arr, function (item) {
            if (item.category.toLowerCase().indexOf(category) !== -1) {
                result.push(item);
            }
        });
        return result;
    };
});

routeApp.controller('loginCtrl', function ($scope, $cookies, $http, $window) {
    $http.get('json/communaute.json').
    success(function (data, status, headers, config) {
        
        $scope.user = data;
        $scope. LoginData = {
            userEmail: "",
            password: ""
        };
       
        $scope.login = function () {
           
            $scope.s = data.find(x => { return x.email == $scope.LoginData.userEmail || x.password == $scope.LoginData.password });
                if ($scope.s) {                    
                  // $window.location.href = '#/';
                   $cookies.put($scope.LoginData.userEmail, $scope.LoginData.password);
                   var favoriteCookie = $cookies.get(
                      $scope.LoginData.userEmail,
                       $scope.LoginData.password
                   );
                    $scope.message = favoriteCookie;
                }
                else {
                    $window.location.href = '#/login';
                }
            }
    })
});

