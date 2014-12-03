var services = angular.module('ApiService', ['ngResource']);

services.factory('Post', function($resource) {
    return $resource('/entry/:id', {id: '@id'}, {
        query: { method: 'GET', isArray: true, url : '/entries'},
        upVote:{ method: 'POST', url : '/entry/:id/up'},
        downVote:{ method: 'POST', url :'/entry/:id/down'},
        submit:{ method: 'POST', url: '/entry'}
    });
});

services.factory('Comment', function($resource) {
    return $resource('/comment/:id', {id: '@id'}, {
        save : { method : 'POST', url : '/entry/:parentId/comment' },
        upVote : { method : 'POST', url : '/comment/:id/up'},
        downVote : { method : 'POST', url : '/comment/:id/down'}
    });
});

redditclone.factory('User', function($resource){
    return $resource('/users', {}, {
        register: { method: 'POST', url: '/register' },
        login: { method: 'POST', url: '/login' }
    });
});
