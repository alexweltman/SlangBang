angular.module('wordguess.controllers')
.controller('GameSetupCtrl', function($scope, $stateParams) {
	$scope.teams = ["Team 1", "Team 2"]
	$scope.players = [
		["Player 1", "Player 2"],
		["Player 1", "Player 2"]
	];

	$scope.logData = function(){
		console.log("Teams: ", $scope.teams, " players: ", $scope.players);
	}
});