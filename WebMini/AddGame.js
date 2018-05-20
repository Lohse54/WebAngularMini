
var gameApp = angular.module('gameApp', []);
gameApp.controller('gameCtrl', function($scope){
    $scope.games = [];

    //Array that contains all the games shown on the page.
    $scope.gameList = [
        { game: "God of War", img: "GOW.jpg"},
        { game: "Battlefield 4", img: "BFF4.jpg"},
        { game: "Infamous: Second Son", img: "ISS.jpg"},
        { game: "Mass Effect 3", img: "ME3.png"}
    ];

    $scope.addGame = function () {
        $scope.games.push($scope.gameName);
    };
});

// Function for retreiving information for showing images and text
function showImg(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}