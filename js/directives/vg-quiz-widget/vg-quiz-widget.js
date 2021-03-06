angular.module("quizApp")
	.directive("vgQuizWidget",
		function vgQuizWidget() {
			return {
				scope: {
					vgConfig: "="
				},
				//				restrict: "E",
				//				require: "^videogular",
				controller: "vgQuizWidgetController",
				controllerAs: "controller",
				templateUrl: "js/directives/vg-quiz-widget/vg-quiz-widget.html",
				link: function link(scope, elem, attrs, ctrl) {
					ctrl.quizElements = elem[0].getElementsByTagName("vq-quiz");
				}
			};
		}
	);
