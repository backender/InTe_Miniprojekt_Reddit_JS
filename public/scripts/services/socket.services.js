var services = angular.module('SocketService', []);

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

//services.factory('Post', function($resource) {
//    return $resource('/entry/:id', {id: '@id'}, {
//        query: {method: 'GET', isArray: true, url: '/entries'},
//        submit:{method: 'POST', url: '/entry'}
//    });
//});
//
//services.factory('User', function($resource){
//    return $resource('/users', {}, {
//        register: { method: 'POST', url: '/register' },
//        login: { method: 'POST', url: '/login' }
//    });
//});
