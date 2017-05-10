(function () {


    var communauteCtrl = function ($scope, $http) {
        $http.get('json/communaute.json').
        success(function (data, status, headers, cinfig) {
            $scope.communautes = data;
        }).
        error(function (data, status, headers, config) {
            console.log("No data found..");
        });
    };
    angular.module('routeApp').controller('communauteCtrl', communauteCtrl);

    var detailsCommunauteCtrl = function ($scope, $routeParams, $http) {
        $http.get('json/communaute.json').
        success(function (data, status, headers, cinfig) {
            var number = parseInt($routeParams.idCommunaute);
            if (!isNaN(number)) {

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
    };

    angular.module('routeApp').controller('communaute_detailsCtrl', detailsCommunauteCtrl);

}());