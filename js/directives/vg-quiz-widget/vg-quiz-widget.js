angular.module("videogularApp")
	.directive("vgQuizPlugin",
		function vgQuizPlugin() {
			return {
				restrict: "E",
				require: "^videogular",
				controller: "VideogularCtrl",
				controllerAs: "ctrl",
				templateUrl: "js/directives/vg-quiz-widget/vg-quiz-widget.html",
				link: function link(scope, elem, attrs, ctrl) {
					//ctrl.tweetElements = elem[0].getElementsByTagName("vg-tweet");
					ctrl.quizElements = elem[0].getElementsByTagName("vq-quiz");
				}
			};
		}
	);
