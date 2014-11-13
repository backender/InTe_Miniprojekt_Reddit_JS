angular.module('redditclone').controller('postController', function($scope, Socket, Posts) {

    console.log('Hello from the Frontpage Controller');

    //$http.get('http://localhost:4730/entries').
     //       success(function(data) {
     //               $scope.entries = data;
    ///); --> Services

    $scope.entries = Posts.getAll();

    Socket.on('AddLink'), function(name){
        console.log('New Links was added');
    }

});