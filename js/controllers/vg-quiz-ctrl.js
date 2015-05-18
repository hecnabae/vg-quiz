// TODO: Cargador de elementos de la colección Quiz
angular.module("videogularApp")
	.controller("QuizController", ["quizCollection", function QuizCtrl(quizCol) {
	this.config = {
		sources: [{
			src: "https://www.youtube.com/watch?v=I7ZUkd44-Co"
		}],
		quizCollection: quizCol.data,
		plugins: {
			analytics: {
				category: "Videogular",
				label: "Quiz Widget",
				events: {
					ready: true,
					play: true,
					pause: true,
					stop: true,
					complete: true,
					progress: 10
				}
			}
		}
	};
    }]);
