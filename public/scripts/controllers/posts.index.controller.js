angular.module('redditclone').controller('postIndexController', function($scope, Socket, Post) {

    console.log('Hello from the Frontpage Controller');

    //$http.get('http://localhost:4730/entries').
    //       success(function(data) {
    //               $scope.entries = data;
    ///); --> Services

    $scope.entries = Post.query();

    Socket.on('AddLink'), function (name) {
        console.log('New Links was added');
    }
});
