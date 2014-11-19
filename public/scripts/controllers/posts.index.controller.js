angular.module('redditclone').controller('postIndexController', function($scope, Page, Socket, Post){

    Page.setTitle('Post Index');

    //$http.get('http://localhost:4730/entries').
    //       success(function(data) {
    //               $scope.entries = data;
    ///); --> Services

    $scope.posts = Post.query();

    Socket.on('AddLink'), function (name) {
        console.log('New Links was added');
    }
});
