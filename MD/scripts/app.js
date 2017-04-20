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
            }).when("/jaunumi", {
                templateUrl: "pages/news.html"
            });
        $locationProvider.hashPrefix('');
    }]);

app.run(['$rootScope',
    function ($rootScope) {
        $rootScope.pictures = pictures;
        $rootScope.stages = stages;
        $rootScope.news = news;
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
    },
    {
        img: "pictures/img10.jpg"
    },
    {
        img: "pictures/img11.jpg"
    },
    {
        img: "pictures/img12.jpg"
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

var news = [
    {
        img: "pictures/news1.jpeg",
        title: "Mīļie, labie draugi!",
        content: "Vislielākais PALDIES Jums par to, ka padarījāt pasākumu lielisku! Jūsu enerģija bija neizsīkstoša un tērpi- apburoši. Mēs, komanda, jau šobrīd nespējam sagaidīt nākamo, 80. jubilejas gadu, lai no jauna vērtu akadēmijas durvis jums visiem!\nAr sveicieniem,\nNogurusī, bet ar platu smaidu sejā- organizatoru komanda"
    },
    {
        img: "pictures/news2.jpeg",
        title: "UZMANĪBU!",
        content: "Rīt (16.02.) no 12.00 pieejamas pēdējās 150 biļetes!\nBiļešu tirdzniecību beidzam līdz ko biļetes izpārdotas, lūgums, sekot līdzi informācijai mūsu Facebook lapā.\nPaldies, tiekamies rīt!"
    },
    {
        img: "pictures/news3.jpeg",
        title: "Sveicieni pirmdienā!",
        content: "Ar lielu prieku izziņojam uzstāšanās laikus pirmajām četrām skatuvēm. Kā arī, atgādinām, ka šodien biļetes tirgojam no 10.00 līdz 20.00 Latvijas Mākslas akadēmijā.\nUz tikšanos! :)"
    },
    {
        img: "pictures/news1.jpeg",
        title: "Uzmanību!",
        content: "Ļoti atvainojamies, bet biļetes ir aizkavējušās pie drukātājiem, ceram, ka tiks piegādātas līdz 16:00."
    },
    {
        img: "pictures/news2.jpeg",
        title: "Hey hey!",
        content: "Vēlamies jūs informēt par karnevāla biļešu pārdošanas laikiem. Vieta nemainīga- Latvijas Mākslas akadēmijas 1. stāva foaje. (Kalpaka bulvāris 13, Rīga)\nBiļešu cena- 10EUR (norēķini tikai skaidrā naudā, biļetes pieejamas ierobežotā skaitā)\nBiļetes iespējams iegādāties tikai ar LMA apliecību vai diplomu!\nGaidīsim ciemos!"
    },
    {
        img: "pictures/news3.jpeg",
        title: "LMA karnevāls šogad būs slēgts pasākums",
        content: "Viens no populārākajiem, krāšņākajiem un arī vecākajiem Rīgas izklaides pasākumiem – Latvijas Mākslas akadēmijas karnevāls – šogad būs slēgts pasākums, kuru varēs apmeklēt tikai LMA studenti, absolventi un \"pāris draugi ar ielūgumiem\"."
    }
];