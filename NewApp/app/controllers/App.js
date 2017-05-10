(function () { 
var routeApp = angular.module('routeApp', ['ngRoute', 'ngFileUpload', 'ngCookies']
    );

routeApp.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
    })
    .when("/recipes", {
        templateUrl: 'partials/recipe.html',
        controller: 'recetteCtrl'
    })
    .when("/ingredients", {
        templateUrl: 'partials/ingredient.html',
        controller: 'ingredientCtrl'
    })
    .when("/communaute", {
        templateUrl: 'partials/communautes.html',
        controller: 'communauteCtrl'

    })
     .when("/new", {
         templateUrl: 'partials/recette_new.html',
         controller: 'recette_newCtrl'
     })
    .when("/details/:id", {
        templateUrl: 'partials/recette_detail.html',
        controller: 'recette_detailsCtrl'
    })
    .when("/detailsCommunaute/:idCommunaute", {
        templateUrl: 'partials/communaute_details.html',
        controller: 'communaute_detailsCtrl'
    })
    .when("/login", {
        templateUrl: 'partials/Login.html',
        controller: 'loginCtrl'
    })
    .when("/detailsCommunaute/:EmailCommunaute", {
        templateUrl: 'partials/communaute_details.html',
        controller: 'communaute_detailsCtrl'
    })
    .otherwise({ redirectTo: "/" });
});
}());