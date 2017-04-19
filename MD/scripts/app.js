var app = angular.module('app',
    [
        'ngRoute',
        'ui.bootstrap',
        'ngAnimate'
    ]);
app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "pages/home.html"
            }).when("/sakums", {
                templateUrl: "pages/home.html"
            }).when("/par", {
                templateUrl: "pages/about.html"
            }).when("/galerija", {
                templateUrl: "pages/galery.html"
            }).when("/skatuves", {
                templateUrl: "pages/stages.html"
            });
        $locationProvider.hashPrefix('');
    }]);

app.run(['$rootScope',
    function ($rootScope) {
        $rootScope.pictures = pictures;
        $rootScope.stages = stages;
    }
]);

app.controller('MenuController', [
    '$scope', '$rootScope', '$location',
    function ($scope, $rootScope, $location) {
        $scope.isNavCollapsed = true;
        $scope.getClass = function (path) {
            return $location.path().indexOf(path) ? '' : 'active';
        }
    }
]);

app.controller('GaleryController', [
    '$scope', '$rootScope',
    function ($scope, $rootScope) {
        $scope.pictures = $rootScope.pictures;
    }
]);

app.controller('StagesController', [
    '$scope', '$rootScope',
    function ($scope, $rootScope) {
        $scope.stages = $rootScope.stages;
    }
]);

var pictures = [
    {
        img: "pictures/img1.jpg"
    },
    {
        img: "pictures/img2.jpg"
    },
    {
        img: "pictures/img3.jpg"
    },
    {
        img: "pictures/img4.jpg"
    },
    {
        img: "pictures/img5.jpg"
    },
    {
        img: "pictures/img6.jpg"
    },
    {
        img: "pictures/img7.jpg"
    },
    {
        img: "pictures/img8.jpg"
    },
    {
        img: "pictures/img9.jpg"
    }
];

var stages = [
    {
        img: "pictures/stage1.png"
    },
    {
        img: "pictures/stage2.png"
    },
    {
        img: "pictures/stage3.png"
    },
    {
        img: "pictures/stage4.png"
    }
];