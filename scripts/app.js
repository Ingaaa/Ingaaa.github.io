var app = angular.module('app', ["ngRoute"]);
app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/pages/zinas.html"
            }).when("/zinas", {
                templateUrl: "/pages/zinas.html"
            }).when("/zinas/:zina", {
                templateUrl: "/pages/page.html"
            }).when("/fakultates", {
                templateUrl: "/pages/fakultates.html"
            }).when("/studentiem", {
                templateUrl: "/pages/studentiem.html"
            }).when("/bibliotekas", {
                templateUrl: "/pages/bibliotekas.html"
            });
    }]);

app.controller('ZinasController', [
    '$scope', '$rootScope',
    function ($scope, $rootScope) {
        $rootScope.news = [
            {
                id: 0,
                title: "Ziemassvētku vecītis - ir! Dekāni sveic visus Ziemassvētkos!",
                img: "Pictures/ZSvetki.jpg",
                display: "large",
            },
            {
                display: "multiple",
                smallLeft: {
                    id: 1,
                    title: "LU kopā ar čekas zinātniskās izpētes komisiju atvērs rakstu “Lielais brālis tevi vēro” 3. sējumu",
                    imgId: "img1"
                },
                smallRight: {
                    id: 2,
                    title: "Mērķis – mainīt un ietekmēt dzīvi. Latvijas Universitātes nākamie 100 gadi zinātnē",
                    imgId: "img2"
                }
            },
            {
                display: "multiple",
                smallLeft: {
                    id: 3,
                    title: "1. decembrī Radio NABA ēterā būs dzirdama īpaša 14. dzimšanas dienas svētku programma",
                    imgId: "img3"
                },
                smallRight: {
                    id: 4,
                    title: "Latvijas Universitāte sāk ilgtermiņa sadarbību ar Eiropas Ājurvēdas akadēmiju Vācijā",
                    imgId: "img4"
                }
            },
            {
                display: "multiple",
                smallLeft: {
                    id: 5,
                    title: "LU rektors Indriķis Muižnieks uzklausa bijušo rektoru idejas attīstībai",
                    imgId: "img5"
                },
                smallRight: {
                    id: 6,
                    title: "Iznācis Latvijas Universitātes žurnāla “Alma Mater” rudens numurs",
                    imgId: "img6"
                }
            },
            {
                display: "multiple",
                smallLeft: {
                    id: 7,
                    title: "Studentu dalība Latvijas Brīvības cīņās - zelta burtiem rakstīta lappuse LU vēsturē",
                    imgId: "img7"
                },
                smallRight: {
                    id: 8,
                    title: "Latvijas Universitāte atzīmē tās pamatlicēja Ernesta Felsberga 150 gadu jubileju",
                    imgId: "img8"
                }
            },
            {
                id: 9,
                title: "Latvijas Universitāte sveic valsts 98. gadadienā!",
                img: "Pictures/Latvija.jpg",
                display: "large",
            }
        ];
        $scope.news = $rootScope.news;
    }
]);

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