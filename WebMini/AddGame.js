var gameApp = angular.module('gameApp', []);
gameApp.controller('gameCtrl', function($scope){
    $scope.games = [];

    $scope.addGame = function () {
        $scope.games.push($scope.gameName);
    };
});