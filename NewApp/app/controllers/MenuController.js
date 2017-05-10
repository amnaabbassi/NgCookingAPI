(function () { 

    var CatagoryCtrl = function ($scope, $http) {
        $http.get('json/categories.json').
        success(function (data, status, headers, config) {
            $scope.category = data;
        });
        
    };
    angular.module('routeApp').controller('CatagoryCtrl', CatagoryCtrl);

    var filterserchfor= function () {
        return function (arr, searchNumber1, searchNumber2) {
            if (!searchNumber1 && !searchNumber2) {
                return arr;
            }
            var result = [];


            angular.forEach(arr, function (item) {
                if (item.calories > searchNumber1 && item.calories < searchNumber2) {
                    result.push(item);
                }
            });
            return result;
        };
    };
    angular.module('routeApp').filter('searchFor',filterserchfor);

    var searchForRecette = function () {
        return function (arr, nbr1, nbr2) {
            if (!nbr1 && !nbr2) {
                return arr;
            }
            var result = [];
            angular.forEach(arr, function (item) {
                if (item.calories > nbr1 && item.calories < nbr2) {
                    result.push(item);
                }
            });
            return result;
        }
    };
    angular.module('routeApp').filter('searchForRecette', searchForRecette);


    var uploadImage = function ($scope, $http, $timeout, $compile, Upload) {
        $scope.onChange = function (files) {
            if (files[0] == undefined) return;
            $scope.fileExt = files[0].name.split(".").pop()
        }
        $scope.isImage = function (ext) {
            if (ext) {
                return ext == "jpg" || ext == "jpeg" || ext == "gif" || ext == "png"
            }
        }
    };
angular.module('routeApp').controller('uploadImage',['$scope', '$http', '$timeout', '$compile', 'Upload', uploadImage]);


var searchCat = function () {
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
};
angular.module('routeApp').filter('searchCat', searchCat);


var login = function ($scope, $cookies, $http, $window) {
    $http.get('json/communaute.json').
    success(function (data, status, headers, config) {

        $scope.user = data;
        $scope.LoginData = {
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
};
angular.module('routeApp').controller('loginCtrl',login);

var Navigation = function ($scope) {
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
};
angular.module('routeApp').controller('NavigationController',Navigation);

}());