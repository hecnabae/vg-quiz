angular.module("videogularApp").config(
    ["$routeProvider", function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/quiz-view.html',
                controller: 'QuizCtrl',
                controllerAs: "ctrl",
                resolve: {
                    "quizCollection": ["$http",
                        function getQuizCollection($http) {
                            return $http.get('data/quizCollection.json');
                        }
                    ]
                }
            });
    }]
);
