angular.module("videogularApp").config(
    ["$routeProvider", function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/quiz-view.html',
                controller: 'QuizCtrl',
                controllerAs: "ctrl",
                resolve: {
                    "tweets": ["$http",
                        function getTweets($http) {
                            return $http.get('data/quizCollection.json');
                        }
                    ]
                }
            });
    }]
);
