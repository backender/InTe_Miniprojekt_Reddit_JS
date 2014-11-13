var services = angular.module('Services', ['ngResource']);

services.factory('Socket', function($rootScope) {
        var socket = io.connect();
        return {
            on: function(eventName, callback) {
                socket.on(eventName, function() {
                    var args = arguments;
                    $rootScope.$apply(function() {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function(eventName, data, callback) {
                if(typeof data == 'function') {
                    callback = data;
                    data = {};
                }
                socket.emit(eventName, data, function() {
                    var args = arguments;
                    $rootScope.$apply(function() {
                        if(callback) {
                            callback.apply(socket, args);
                        }
                    });
                });
            }
        };
    });

services.factory('Posts', ['$resource', function($resource) {
    return $resource('/entry/:id', {id: '@id'}, {
        getAll: {method: 'GET', isArray: true, url: '/entries'}
    });
}]);
