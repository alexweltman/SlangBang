angular.module('wordguess.controllers', ['ionic', 'ionic.contrib.ui.tinderCards'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})


.controller('GameCtrl', function($scope, $stateParams) {
  $scope.words = ["selfie", "hashtag", "clickbait", "instagram", "millenial"];
  $scope.synonyms = {
    "selfie" : ["camera", "picture", "instagram", "just let me take a", "chainsmokers"],
    "hashtag" : ["twitter", "pound sign", "selfie", "throw back thursday", "winning"],
    "clickbait" : ["buzzfeed", "lists", "headline", "link", "clickbaitword"],
    "instagram" : ["picture", "filter", "follow", "like", "vine"]
  }
  $scope.cards = [];
  $scope.wordIndex = 0;

  $scope.init = function() {

      $scope.words.forEach(function(word){
        $scope.cards.push({
          "word" : word,
          "synonyms" : $scope.synonyms[word]
        });
      });
        
      console.log($scope.cards);
      $scope.gameInSession = false;
      $scope.turnInSession = false;
      $scope.teams = {
        "Blue" : {
          "points" : 0,
          "members" : [
            {"B1" : 0},
            {"B2" : 0},
            {"B3" : 0}
            ],
          "rounds" : []
        },
        "Red" : {
          "points" : 0,
          "members" : [
            {"R1" : 0},
            {"R2" : 0},
            {"R3" : 0}
            ],
          "rounds" : []
        }
      }
  }


  $scope.startGame = function() {
    $scope.gameInSession = true;
    $scope.turnInSession = true;
  }

  $scope.cardSwipedLeft = function(index) {
        console.log('Left swipe');
  }
 
  $scope.cardSwipedRight = function(index) {
        console.log('Right swipe');
  }
 
  $scope.cardDestroyed = function(index) {
        $scope.cards.splice(index, 1);
        console.log('Card removed');
  }

  $scope.init();
  });
