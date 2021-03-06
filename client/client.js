/**
 * Created by lizwestberg on 1/11/16.
 */

var app = angular.module('builtInApp', []);
var adjArray = [];
var nounArray = [];
var userArray = [];

app.controller('MainController',['$scope','$http', function($scope, $http){

    $scope.getWords = function() {
            for (i = 0; i < nounArray.length; i++) {
                userArray.push(adjArray[i] + nounArray[i])
            }
            $scope.twitterPost = userArray;
    };

    function fetchWords() {
        $http.get('/getNouns').then(function (response) {
            for (i = 0; i < response.data.nouns.length; i++) {
                nounArray.push(response.data.nouns[randomNumber(0, response.data.nouns.length - 1)].Noun);
            }
        });

        $http.get('/getAdj').then(function (response) {
            for (i = 0; i < response.data.adjectives.length; i++) {
                adjArray.push(response.data.adjectives[randomNumber(0, response.data.adjectives.length - 1)].Adjective);
            }
        });
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    fetchWords();

}]);

