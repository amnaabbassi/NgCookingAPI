(function () {

    var CommunauteController = function ($scope,$http) {
        http.get('json/communaute.json').
    success(function (data, status, headers, cinfig) {
        $scope.communautes = data;
    }).
    error(function (data, status, headers, config) {
        console.log("No data found..");
    });
    }

    //angular.module('routeApp').controller('CommunauteController', communauteCtrl)
    angular.module('routeApp').controller('CommunauteController', ["$scope", CommunauteController]);
}());

