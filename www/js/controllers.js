angular.module('wordguess.controllers', [])

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

  $scope.init = function() {

      $scope.gameInSession = false;
      $scope.turnInSession = false;
      $scope.wordIndex = 0;
      $scope.card = {
        "word" : "",
        "synonyms" : []
      }
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
      console.log("created teams: ", $scope.teams);
  }

  $scope.revealNextCard = function () {
    $scope.card.word = $scope.words[$scope.wordIndex];
    $scope.card.synonyms = $scope.synonyms[$scope.card.word];
    $scope.wordIndex++;
  }

  $scope.startGame = function() {
    $scope.revealNextCard();
    $scope.gameInSession = true;
    $scope.turnInSession = true;
  }


  $scope.init();
  });
