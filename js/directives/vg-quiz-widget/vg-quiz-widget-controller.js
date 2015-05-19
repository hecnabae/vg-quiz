'use strict';
angular.module("quizApp")
	.controller("vgQuizWidgetController", ["$scope", function ($scope) {
		$scope.API = null;
		$scope.currentQuizParams = {};

		this.onPlayerReady = function (API) {
			$scope.API = API;
		}

		this.init = function init() {
			// TODO: Preparar inicialización
			var quizCollection = [];
			var quiz = {};

			for (var i in $scope.vgConfig.quizCollection) {
				var q = $scope.vgConfig.quizCollection[i];
				// 6. Asignar quizParams a quiz.params
				var quiz = {}; //$scope.vgConfig.quizCollection[i];

				quiz.timeLapse = {
					start: q.start,
					end: q.end
				};

				quiz.params = q.params;

				quiz.onLeave = this.onLeave.bind(this);
				quiz.onUpdate = this.onUpdate.bind(this);
				quiz.onComplete = this.onComplete.bind(this);

				quizCollection.push(quiz);
			}


			//TODO: Ver el ejemplo de Twitter. Ver https://github.com/2fdevs/videogular/blob/master/app/views/cue-points.html . Si nos fijamos en el ejemplo, definen la colección cuePoints en ctrl.config.cuePoints
			this.config = {
				preload: "none",
				sources: $scope.vgConfig.sources,
				cuePoints: {
					quizCollection: quizCollection
				},
				theme: "http://www.videogular.com/styles/themes/default/latest/videogular.css",
				plugins: $scope.vgConfig.plugins
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
