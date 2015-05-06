'use strict';
angular.module("videogularApp")
	.controller("VideogularCtrl", ["$scope", "$sce", function ($scope, $sce) {
		$scope.API = null;
		$scope.currentQuizParams = {};

		this.onPlayerReady = function (API) {
			$scope.API = API;
		}

		this.init = function init() {
			// TODO: Preparar inicialización
			var quizCollection = [];
			var quiz = {};

			// 5. Cargar punto temporal de pausa
			quiz = {
				timeLapse: {
					start: 10,
					end: 10
				},
				params: {
					index: 1,
					id: 1,
					question: '¿De qué color es el caballo blanco de Santiago?',
					answers: [
						{
							id: 1,
							text: 'Azul'
					},
						{
							id: 2,
							text: 'Rojo'
					},
						{
							id: 3,
							text: 'Blanco',
							isCorrect: true
					}
			]
				}
			};

			// 6. Asignar quizParams a quiz.params


			quiz.onLeave = this.onLeave.bind(this);
			quiz.onUpdate = this.onUpdate.bind(this);
			quiz.onComplete = this.onComplete.bind(this);

			quizCollection.push(quiz);

			//TODO: Ver el ejemplo de Twitter. Ver https://github.com/2fdevs/videogular/blob/master/app/views/cue-points.html . Si nos fijamos en el ejemplo, definen la colección cuePoints en ctrl.config.cuePoints
			this.config = {
				preload: "none",
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
				cuePoints: {
					quizCollection: quizCollection
				},
				theme: "http://www.videogular.com/styles/themes/default/latest/videogular.css",
				plugins: {
					poster: "http://www.videogular.com/assets/images/videogular.png"
				}
			};
		};
		this.onLeave = function onLeave(currentTime, timeLapse, params) {

		};

		this.onComplete = function onComplete(currentTime, timeLapse, params) {
			//$scope.ctrl.config.cuePoints.quizCollection.
			$scope.API.pause();
			$scope.currentQuizParams = params;
		};

		this.onUpdate = function onUpdate(currentTime, timeLapse, params) {
			$scope.API.pause();

			// TODO: Mostrar quizz

		};
		this.init();


		}]);
