var app = angular.module('app', ["ngRoute"]);
app.config(['$routeProvider', '$locationProvider'],
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "pages/home.html"
            });
    });

/*app.controller('RecipesController', [
    '$scope', '$rootScope', '$http',
    function ($scope, $rootScope, $http) {
        $http.get("/recipes.json")
            .then(function (data) {
                $rootScope.recipes = data.data.recipes;
            }, function () {

            });
    }
]);*/

/*app.controller('RecipeController', [
    '$scope', '$rootScope', '$http', '$routeParams',
    function ($scope, $rootScope, $http, $routeParams) {
        $scope.recipeId = $routeParams.recepte;
        console.log($rootScope.recipes);
        if ($rootScope.recipes === undefined) {
            $http.get("/recipes.json")
                .then(function (data) {
                    $rootScope.recipes = data.data.recipes;
                    var recipes = $rootScope.recipes;
                    var recipesLength = recipes.length;
                    var recipe = {};
                    for (var i = 0; i < recipesLength; i++) {
                        if (recipes[i].recipe.url === $scope.recipeId) {
                            recipe = recipes[i].recipe;
                            break;
                        }
                    }
                    $scope.recipe = recipe;
                }, function () {

                });
        } else {
            var recipes = $rootScope.recipes;
            var recipesLength = recipes.length;
            var recipe = {};
            for (var i = 0; i < recipesLength; i++) {
                if (recipes[i].recipe.url === $scope.recipeId) {
                    recipe = recipes[i].recipe;
                    break;
                }
            }
            $scope.recipe = recipe;
        }
    }
]);*/