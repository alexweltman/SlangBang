angular.module('wordguess.controllers')
.controller('GameSetupCtrl', function($scope, $stateParams) {
	$scope.editing = false;
	$scope.defaultPlayers = ["Player 1", "Player 2"];
	$scope.teams = ["", ""]
	$scope.players = [
		["", ""],
		["", ""]
	];

	$scope.logData = function(){
		console.log("Teams: ", $scope.teams, " players: ", $scope.players);
	}

	$scope.addTeam = function(){
		$scope.teams.push("");
		$scope.players.push(["", ""])
	}

	$scope.removeTeam = function(teamIndex) {
		$scope.teams.splice(teamIndex, 1);
		$scope.players.splice(teamIndex, 1);
	}

	$scope.addPlayer = function(teamIndex){
		var newPlayer = "";
		$scope.players[teamIndex].push(newPlayer);
		console.log($scope.players);
	}

	$scope.removePlayer = function(teamIndex, playerIndex){
		$scope.players[teamIndex].splice(playerIndex, 1);
	}

	$scope.edit = function(){
		$scope.editing = !$scope.editing;
	}
});
