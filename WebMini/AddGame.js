
var gameApp = angular.module('gameApp', []);
gameApp.controller('gameCtrl', function($scope){
    $scope.games = [];

    //Array that contains all the games shown on the page.
    $scope.gameList = [
        { game: "God of War", img: "GOW.jpg", gameDescription: "Something"},
        { game: "Battlefield 4", img: "BFF4.jpg", gameDescription: "Something1"},
        { game: "Infamous: Second Son", img: "ISS.jpg", gameDescription: "Something2"},
        { game: "Mass Effect 3", img: "ME3.png", gameDescription: "Something3"}
    ];

    $scope.addGame = function (gameName) {
        $scope.games.push(gameName);
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