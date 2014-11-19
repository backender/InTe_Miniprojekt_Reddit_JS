var services = angular.module('ApiService', ['ngResource']);

services.factory('Post', function($resource) {
    return $resource('/entry/:id', {id: '@id'}, {
        query: {method: 'GET', isArray: true, url: '/entries'}
    });
});

redditclone.factory('User', function($resource){
    return $resource('/users', {}, {
        register: { method: 'POST', url: '/register' },
        login: { method: 'POST', url: '/login' }
    });
});
