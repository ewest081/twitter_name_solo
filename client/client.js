/**
 * Created by lizwestberg on 1/11/16.
 */

var app = angular.module('builtInApp', []);
var adjArray = [];
var nounArray = [];


app.controller('MainController',['$scope','$http', function($scope, $http){

    $scope.getWords = function() {
        $http.get('/getAdj').then(function (response) {
            for (i = 0; i < adjectives.length; i++) {
                $scope.adjectives = response.data.adjectives[i];
                adjArray.push(response.data.adjectives[i]);
            }
        });
        $http.get('/getNouns').then(function (response) {
            for (i = 0; i < nouns.length; i++) {
                $scope.nouns = response.data.nouns[i];
                nounArray.push(response.data.nouns[i]);
            }
        console.log(adjArray);
        console.log(nounArray);
        });

        //$scope.adjectives = adjArray;
        //$scope.nouns = nounArray;
        //makeHandle();
    };

    //var makeHandle = function(){
    //    var random = randomNumber(0,9);
    //    var adjSelect = adjArray[random];
    //    var nounSelect = nounArray[random];
    //
    //    var adjective = adjSelect.adjective;
    //    var noun = nounSelect.noun;
    //
    //    var twitterHandle = adjective + noun;
    //
    //    $scope.twitterPost = 'And your new twitter handle is: ' + twitterHandle;
    //};

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
}]);

