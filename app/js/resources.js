(function () {
    var API_ENDPOINT = 'http://0.0.0.0:8080/';

    function url(path) {
        return API_ENDPOINT + path;
    }

    angular.module('myApp.resources', ['ngResource'])
        .factory('interestResource', function ($resource) {
            return $resource(url('interest/:id'));
        });
})(angular)