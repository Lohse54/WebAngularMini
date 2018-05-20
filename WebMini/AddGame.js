var gameApp = angular.module('gameApp', []);
gameApp.controller('gameCtrl', function($scope){
    $scope.games = [];

    $scope.gameList = [
        "God of War",
        "Battlefield 4",
        "Infamous: Second Son",
        "Mass Effect 3"
        ];

    $scope.addGame = function () {
        $scope.games.push($scope.gameName);
    };
});

function showImg(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}