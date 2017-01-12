var app = angular.module('app', ["ngRoute"]);
app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/MD1/pages/home.html"
            }).when("/home", {
                templateUrl: "/MD1/pages/home.html"
            }).when("/shop", {
                templateUrl: "/MD1/pages/shop.html"
            }).when("/inspire", {
                templateUrl: "/MD1/pages/inspire.html"
            }).when("/story", {
                templateUrl: "/MD1/pages/story.html"
            }).when("/user", {
                templateUrl: "/MD1/pages/user.html"
            }).when("/cart", {
                templateUrl: "/MD1/pages/cart.html"
            }).when("/about", {
                templateUrl: "/MD1/pages/about.html"
            });
    }]);

/*app.run(['$rootScope',
    function ($rootScope) {
        $rootScope.news = news;
        $rootScope.newsText = newsText;
        $rootScope.fakultates = fakultates;
        $rootScope.bibliotekas = bibliotekas;
        $rootScope.studentiem = studentiem;
    }
]);

app.controller('ZinasController', [
    '$scope', '$rootScope',
    function ($scope, $rootScope) {
        $scope.news = $rootScope.news;
    }
]);
*/