var services = angular.module('CommonService', []);

services.factory('Page', function() {
    this.title = 'Home';
    return {
        title: function() { return this.title; },
        setTitle: function(newTitle) { this.title = newTitle }
    };
});