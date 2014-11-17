angular.module('redditclone').controller('registerController', function($scope, $location, User) {

    $scope.userAlreadyExists = false;

    $scope.login = function(credentials){

        $scope.user = new User();

        $scope.user.name = credentials.username;
        $scope.user.password = credentials.password;

        $scope.user.$register(function(res){
            $location.path('/');
        },function(error){
            //TODO: Bei Fehler macht in jedem Fall HTTP Status 200 (OK) und gibt bei Fehler nur ein false als Response zurück -> Besser: server umbauen damit er bei Fehler Error Code zurück gibt
            $scope.userAlreadyExists = true;
        });
    }

});