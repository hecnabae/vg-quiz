// TODO: Cargador de elementos de la colección Quiz
angular.module("quizApp")
	.controller("QuizController", ["quizCollection", "$sce", function QuizCtrl(quizCol, $sce) {
		this.config = {
			sources: [
				{
					src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"),
					type: "video/mp4"
								},
				{
					src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"),
					type: "video/webm"
								},
				{
					src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"),
					type: "video/ogg"
								}
								],
			quizCollection: quizCol.data,
			plugins: {
				poster: "http://www.videogular.com/assets/images/videogular.png"
					//			analytics: {
					//				category: "Videogular",
					//				label: "Quiz Widget",
					//				events: {
					//					ready: true,
					//					play: true,
					//					pause: true,
					//					stop: true,
					//					complete: true,
					//					progress: 10
					//				}
					//}
			}
		};
	}]);
