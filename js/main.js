'use strict';
angular.module('videogularApp', [
			"ngSanitize",
			"com.2fdevs.videogular",
			"com.2fdevs.videogular.plugins.controls",
			"com.2fdevs.videogular.plugins.overlayplay",
			"com.2fdevs.videogular.plugins.poster"
		])
	.controller('VideogularCtrl', ["$sce", function ($sce) {
		var controller = this;

		controller.config = {
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
			theme: "http://www.videogular.com/styles/themes/default/latest/videogular.css",
			plugins: {
				poster: "http://www.videogular.com/assets/images/videogular.png"
			}
		};
		}])
	.directive("vgQuizPlugin", [function () {
			return {
				restrict: "E",
				require: "^videogular",
				template: "<div ng-show=\"API.isCompleted && API.currentState == 'stop'\"><span ng-click=\"onClickReplay()\">REPLAY!</span></div>",
				link: function (scope, elem, attrs, API) {
					scope.API = API;

					scope.onClickReplay = function () {
						API.play();
					};
				}
			}
		}
	]);
