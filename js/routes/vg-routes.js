angular.module("quizApp", ["ngRoute"])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/quiz-view.html',
				controller: 'QuizController',
				controllerAs: 'ctrl',
				resolve: {
					"quizCollection": ['$http',
                        function getQuizCollection($http) {
							return $http.get('data/quizCollection.json');
                        }
                    ]
				}
			});
	});
