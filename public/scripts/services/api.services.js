var services = angular.module('Services', ['ngResource']);

services.factory('Post', function($resource) {
    return $resource('/entry/:id', {id: '@id'}, {
        query: {method: 'GET', isArray: true, url: '/entries'}
    });
});

services.factory('User', function($resource){
    return $resource('/users', {}, {
        register: { method: 'POST', url: '/register' },
        login: { method: 'POST', url: '/login' }
    });
});
