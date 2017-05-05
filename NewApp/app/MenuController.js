var routeApp = angular.module('routeApp', ['ngRoute', 'ngFileUpload', 'ngCookies']
    );

routeApp.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: 'partiels/home.html',
        controller: 'homeCtrl'
    })
    .when("/recipes", {
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
    })
    .when("/detailsCommunaute/:EmailCommunaute", {
        templateUrl: 'partiels/communaute_details.html',
        controller: 'communaute_detailsCtrl'
    })
    .otherwise({ redirectTo: "/" });
}); 

routeApp.controller('homeCtrl',function ($scope,$cookies, $http) {
    $http.get('json/recettes.json').
   success(function (data, status, headers, config) {
       $scope.recettes = data; 
       var cookienow = $cookies.get('Name');
       $scope.message = cookienow;
   }).
   error(function (data, status, headers, config) {
       console.log("No data found..");
   });   
});

routeApp.controller('recetteCtrl', function ($scope, $http) {
    $http.get('json/recettes.json').
   success(function (data, status, headers, config) {
       $scope.recettes = data;

       $scope.Compar = function () {

       };
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
           
});

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
         if ($routeParams.idCommunaute == data.id)
         {
             $scope.communaute = data.find(
           x => {
               return x.id == $routeParams.idCommunaute;
           });
         } else {

             $scope.communaute = data.find(
           x => {
               return x.email == $routeParams.idCommunaute;
           });
         }
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
           
            $scope.s = data.find(x => { return x.email == $scope.LoginData.userEmail && x.password == $scope.LoginData.password });
                if ($scope.s) {                    
                  
                  $cookies.put('Name', $scope.LoginData.userEmail);
                
                  var favoriteCookie = $cookies.get('Name');
                  $scope.message = favoriteCookie;
                  window.location.reload(true);
                  $window.location.href = '#/';
                   
                }
                else {
              
                    $window.location.href = '#/login';
                    $scope.messageerreur = "Your email or password are wrong  try again";
                }
        }
        $scope.logout = function () {
            
            var cookies = $cookies.getAll();
            angular.forEach(cookies, function (v, k) {
                $cookies.remove(k);
                $window.location.reload(true);
                $window.location = '#/login';
            });
            
        };
    })
});

//routeApp.controller("con", function ($scope,$location) {

//    $scope.class = "page_hom";
//    $scope.class1 = "page_rec";
//    $scope.class2 = "page_ing";
//    $scope.class3 = "page_com";

//    //$scope.clickActive = function ($scope) {
//    //     if ($scope.class === "page_hom" ) {
//    //        $scope.class === "page_hom active";
//    //    } else if ($scope.class1 === "page_rec") {
//    //        $scope.class === "page_rec active";
//    //    } else if ($scope.class2 === "page_ing") {
//    //        $scope.class === "page_ing active";
//    //    } else if ($scope.class3 === "page_com") {
//    //        $scope.class === "page_com active";
//    //    }
//    //};
  
//});


routeApp.controller('NavigationController', function ($scope) {
    // Have to use a wrapper object, otherwise "activeItem" won't work
    $scope.states = {};
    $scope.states.activeItem = 'item1';
    $scope.items = [{
        id: 'item1',
        title: 'Accueil',
        url: '#/',
        itemclass: 'page_hom'
    }, {
        id: 'item2',
        title: 'Recettes',
        url: '#/recipes',
        itemclass: 'page_rec'
    }, {
        id: 'item3',
        title: 'Ingredients',
        url: '#/ingredients',
        itemclass: 'page_ing'
    }, {
        id: 'item4',
        title: 'Communaute',
        url: '#/communaute',
        itemclass: 'page_com'
    }];
});
        