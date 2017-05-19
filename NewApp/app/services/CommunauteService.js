(function () {
    var communauteService = function ($http, $timeout) {
        var result = {
            fetch: function (callback) {
                return $timeout(function () {
                    return $http.get(
                   {
                       method: 'GetCommunities',
                       data: callback,
                       url: 'http://localhost:65224/api/Communities'
                   }
                        //'api/Communities'
                       // 'json/communaute.json'
                        ).then(function (response) {
                        return response.data;
                    });
                }, 30);
            }
        }
        return result;
    };
    angular.module('routeApp').service('CommunauteService', communauteService);
}());