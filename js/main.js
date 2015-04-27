'use strict';
angular.module("videogularApp", [
			"ngSanitize",
			"com.2fdevs.videogular",
			"com.2fdevs.videogular.plugins.controls",
			"com.2fdevs.videogular.plugins.overlayplay",
			"com.2fdevs.videogular.plugins.poster"
		])
	.controller("VideogularCtrl", ["$scope", "$sce", function ($scope, $sce) {
		this.API = null;

		this.onPlayerReady = function onPlayerReady(API) {
			this.API = API;
		}

		this.init = function init() {
			// TODO: Preparar inicialización
			var quizCollection = [];
			var quiz = {};
			quiz.timeLapse = {
				start: 10,
				end: 15
			};
			quiz.onLeave = this.onLeave.bind(this);
			quiz.onUpdate = this.onUpdate.bind(this);
			quiz.onComplete = this.onComplete.bind(this);

			quizCollection.push(quiz);

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
			// TODO: Este evento en realidad no tiene mucha funcionalidad
			API.pause();
		};

		this.onUpdate = function onUpdate(currentTime, timeLapse, params) {
			API.pause();
			// TODO: Mostrar quizz

		};
		this.init();


		}]);
angular.module("videogularApp")
	.directive("vgQuizPlugin",
		function vgQuizPlugin() {
			return {
				restrict: "E",
				require: "^videogular",
				controller: "VideogularCtrl",
				controllerAs: "ctrl",
				template: "<div ng-show=\"API.isCompleted && API.currentState == 'stop'\"><span ng-click=\"onClickReplay()\">REPLAY!</span></div>",
				link: function link(scope, elem, attrs, ctrl) {
					//ctrl.tweetElements = elem[0].getElementsByTagName("vg-tweet");
					ctrl.quizElements = elem[0].getElementsByTagName("vq-quiz-plugin");
				}
			};
		}
	);







//	.directive("vgQuizPlugin", [function () {
//			return {
//				restrict: "E",
//				require: "^videogular",
//				template: "<div ng-show=\"API.isCompleted && API.currentState == 'stop'\"><span ng-click=\"onClickReplay()\">REPLAY!</span></div>",
//				link: function (scope, elem, attrs, API) {
//					scope.API = API;
//
//
//
//					scope.onClickReplay = function () {
//						API.play();
//					};
//
//
//				}
//			}
//		}
//	]);
