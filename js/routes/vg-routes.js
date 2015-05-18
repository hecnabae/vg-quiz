angular.module("videogularApp", ['ngRoute'])


.config(function ($routeProvider, $locationProvider) {
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

	// configure html5 to get links working on jsfiddle
	//$locationProvider.html5Mode(true);
});

//.config(function ($routeProvider, $locationProvider) {
//		//["$routeProvider", function config($routeProvider) {
//		$routeProvider
//			.when('/', {
//				templateUrl: 'views/quiz-view.html',
//				controller: 'QuizController',
//				controllerAs: 'ctrl',
//				resolve: {
//					"quizCollection": ['$http',
//                        function getQuizCollection($http) {
//							return $http.get('data/quizCollection.json');
//                        }
//                    ]
//				}
//			});
//	} //]
//);
