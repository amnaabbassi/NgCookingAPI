(function () {
    var communauteService = function ($http, $timeout) {
        var result = {
            fetch: function (callback) {
                return $timeout(function () {
                    return $http.get('json/communaute.json').then(function (response) {
                        return response.data;
                    });
                }, 30);
            }
        }
        return result;
    };
    angular.module('routeApp').service('CommunauteService', communauteService);
}());