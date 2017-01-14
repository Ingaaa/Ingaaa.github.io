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
            }).when("/shop/:product", {
                templateUrl: "/MD1/pages/product.html"
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
app.controller('ProductController', [
    '$scope', '$rootScope', '$routeParams',
    function ($scope, $rootScope, $routeParams) {
        $scope.product = $rootScope.products[$routeParams.product];
    }
]);

var products = [
    {
        id: 0,
        title: "Roses",
        img: "Pictures/Roses.jpg",
        description: "Pure romance, pure tradition, pure pink roses. Send two dozen roses to your wife \"just because.\" Send two dozen roses to your girlfriend to get out of the doghouse. Send two dozen roses to someone you love, because, with roses like these, they're sure to love you back.",
        bullets: ["24 pink roses", "Stands approximately 16\" tall"]
    },
    {
        id: 1,
        title: "Tulips",
        img: "Pictures/Tulips.jpg",
        description: "There may be no better flowers than tulips, and there are certainly no better tulips than ours. Our long-established relationships with dozens of flower growers helps ensure we get the best. So be confident in choosing Daisy Flower Shop for tulips - or for any bouquet - because they'll always be fresh from the fields.",
        bullets: ["15 tulips (assorted colors)", "Stands approximately 16\" tall"]
    },
    {
        id: 2,
        title: "Orchids",
        img: "Pictures/Orchids.jpg",
        description: "These 15 stems of white Dendrobium orchid have multiple butterfly-shaped blooms, and create an impressive display wherever they're placed. As a business gift or as an expression of admiration or sympathy, we'll put our white orchids up against any other flower or gift on the market.",
        bullets: ["15 multiple bloom stems white Dendrobium orchids", "Stands approximately 14\" tall", "Imported from Thailand"]
    },
    {
        id: 3,
        title: "Gerberas",
        img: "Pictures/Gerberas.jpg",
        description: "Celebrate any occasion with a bright, beautiful gerbera bouquet. Gerbera are fast becoming a favourite of flower lovers. Available in a groovy rainbow of bright colours. ",
        bullets: ["15 gerberas (assorted colors)", "Stands approximately 16\" tall"]
    },
    {
        id: 4,
        title: "Dahlias",
        img: "Pictures/Dahlias.jpg",
        description: "This tropical genus brings the mid–to–late–season garden a never–ending succession of flowers in glorious shades and shapes.",
        bullets: ["15 dahlias (assorted colors)", "Stands approximately 16\" tall"]
    },
    {
        id: 5,
        title: "Peonies",
        img: "Pictures/Peonies.jpg",
        description: "Paeonia 'Angel Cheeks' is a Late Midseason Peony Lactiflora with double soft cameo-pink flowers, with red freckles on the top of the petals, double row of pink guard petals, big full bloom, Lovely fragrant, normal grower, big leaves.",
        bullets: ["15 peonies (assorted colors)", "Stands approximately 16\" tall"]
    },
    {
        id: 6,
        title: "Daisies",
        img: "Pictures/Dasies.jpg",
        description: "This delightful, playful bouquet includes 36 plump white and yellow daisies and fresh greens, perfectly arranged for any occasion.",
        bullets: ["30 daisies (assorted colors)", "Stands approximately 24\" tall"]
    },
    {
        id: 7,
        title: "Others",
        img: "Pictures/Others.jpg",
        description: "Design your perfect bouquet to meet any budget with our custom order option, whatever you desire, we can create.",
        bullets: ["Any flowers", "Approximately 16\" - 24\" tall"]
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
        title: "Flower baskets",
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