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
            }).when("/about", {
                templateUrl: "/MD1/pages/about.html"
            }).when("/contact", {
                templateUrl: "/MD1/pages/contact.html"
            });
    }]);

app.run(['$rootScope',
    function ($rootScope) {
        $rootScope.products = products;
        $rootScope.inspires = inspires;
        $rootScope.values = values;
    }
]);

app.controller('ShopController', [
    '$scope', '$rootScope',
    function ($scope, $rootScope) {
        $scope.products = $rootScope.products;
    }
]);
app.controller('InspireController', [
    '$scope', '$rootScope',
    function ($scope, $rootScope) {
        $scope.inspires = $rootScope.inspires;
    }
]);
app.controller('AboutController', [
    '$scope', '$rootScope',
    function ($scope, $rootScope) {
        $scope.values = $rootScope.values;
    }
]);

var products = [
    {
        id: 0,
        title: "Roses",
        img: "Pictures/Roses.jpg"
    },
    {
        id: 1,
        title: "Tulips",
        img: "Pictures/Tulips.jpg"
    },
    {
        id: 2,
        title: "Orchids",
        img: "Pictures/Orchids.jpg"
    },
    {
        id: 3,
        title: "Gerberas",
        img: "Pictures/Gerberas.jpg"
    },
    {
        id: 4,
        title: "Dahlias",
        img: "Pictures/Dahlias.jpg"
    },
    {
        id: 5,
        title: "Peonies",
        img: "Pictures/Peonies.jpg"
    },
    {
        id: 6,
        title: "Dasies",
        img: "Pictures/Dasies.jpg"
    },
    {
        id: 7,
        title: "Others",
        img: "Pictures/Others.jpg"
    }
];

var inspires = [
    {
        title: "Anniversary",
        img: "Pictures/Insp1.jpg"
    },
    {
        title: "101 roses",
        img: "Pictures/Insp2.jpg"
    },
    {
        title: "Flower buckets",
        img: "Pictures/Insp3.jpg"
    },
    {
        title: "Birthday",
        img: "Pictures/Insp4.jpg"
    },
    {
        title: "Floristics",
        img: "Pictures/Insp5.jpg"
    },
    {
        title: "Wedding",
        img: "Pictures/Insp6.jpg"
    },
    {
        title: "Bouquets",
        img: "Pictures/Insp7.jpg"
    },
];
var values = [
    {
        title: "Fresh from the field",
        img: "Icons/sprout.png"
    },
    {
        title: "Field-to-door",
        img: "Icons/house-black-silhouette-without-door.png"
    },
    {
        title: "Thoughtfully convenient",
        img: "Icons/thought-bubble-.png"
    },
    {
        title: "Service delivered",
        img: "Icons/delivery-truck.png"
    },
    {
        title: "Discover the great quality",
        img: "Icons/quality.png"
    },
];