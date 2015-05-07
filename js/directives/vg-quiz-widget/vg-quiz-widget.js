angular.module("videogularApp")
	.directive("vgQuizWidget",
		function vgQuizPlugin() {
			return {
				restrict: "E",
				require: "^videogular",
				controller: "vgQuizWidgetController",
				controllerAs: "ctrl",
				templateUrl: "js/directives/vg-quiz-widget/vg-quiz-widget.html",
				link: function link(scope, elem, attrs, ctrl) {
					ctrl.quizElements = elem[0].getElementsByTagName("vq-quiz");
				}
			};
		}
	);
