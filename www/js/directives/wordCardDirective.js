angular.module('wordguess.directives', ['ionic', 'ionic.contrib.ui.tinderCards'])
.directive('tabooCard', function(){
	return{
		restrict: 'E',
		templateUrl: '/templates/directives/taboo-card.html',
		// scope: {
		// 	card:'='
		// }
	};
});