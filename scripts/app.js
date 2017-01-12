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

app.run(['$rootScope',
    function ($rootScope) {
        $rootScope.news = news;
    }
]);

app.controller('ZinasController', [
    '$scope', '$rootScope',
    function ($scope, $rootScope) {
        $scope.news = $rootScope.news;
    }
]);

app.controller('PageController', [
    '$scope', '$rootScope', '$routeParams',
    function ($scope, $rootScope, $routeParams) {
        $scope.newsId = $routeParams.zina;
        $scope.zina = $rootScope.news[0];
        console.log($rootScope.news[0]);
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
var news = [
    {
        id: 0,
        title: "Ziemassvētku vecītis - ir! Dekāni sveic visus Ziemassvētkos!",
        img: "Pictures/ZSvetki.jpg",
        display: "large",
        startText: "Tas, ka visiem brīnumiem ir kāds izskaidrojums un arī reāls pamats, arvien pierādījies laika gaitā, jo vairāk atklājot un aizpildot mūsu zināšanu baltos plankumus. Gada nogales jauko gaidu laikā aktualizējas Ziemassvētku vecīša personības fenomens. Neviens nav redzējis, kā viņš tās lietas dara, bet dāvanas aizvien sarūpē, un prieku lieliem un mazākiem rada. Šajā brīnumainajā Ziemassvētku sagaidīšanas nedēļā lūdzām Latvijas Universitātes fakultāšu dekānus sniegt pierādījumus un citas zīmes, kas liecina par Ziemassvētku vecīša esamību. Tātad - vārds LU fakultāšu dekāniem, kuru vēstījumu ievada LU prorektors eksakto, dzīvības un medicīnas zinātņu jomā Valdis Segliņš. Viņam šodien piebiedrojas Bioloģijas fakultātes dekāns Nils Rostoks un Datorikas fakultātes dekāns Juris Borzovs. Turpmākajās nedēļas dienās jūs uzrunās citu LU fakultāšu dekāni.",
        mainText: "Juris Borzovs, Dr.habil.dat., prof., LU Datorikas fakultātes dekāns\n\nApgalvojums 1. Ziemassvētku vecītis eksistē.\n\nApgalvojums 2. Ziemassvētku vecītis neeksistē.\n\nApgalvojums 3. Ikviena izteikta doma ir meli (Heraklits).\n\nNo datorzinātnes viedokļa var būt tā, ka ar nenulles varbūtību patiess ir Apgalvojums 1, un vienlaikus ar nenulles varbūtību patiess ir Apgalvojums 2.\n\nSveicu visus Ziemassvētkos!"
    },
    {
        display: "multiple",
        smallLeft: {
            id: 1,
            title: "LU kopā ar čekas zinātniskās izpētes komisiju atvērs rakstu “Lielais brālis tevi vēro” 3. sējumu",
            imgId: "img1",
            startText: "LPSR Valsts drošības komitejas zinātniskās izpētes komisija kopā ar Latvijas Universitāti (LU) un LPSR VDK pret latviešu tautu veikto totalitāro noziegumu dokumentu digitalizācijas krātuvi aicina 7. decembrī plkst. 17.30 Šēla savrupnamā, Krišjāņa Valdemāra ielā 11a, Rīgā (Kultūras ministrija), uz rakstu 3. sējuma “Lielais brālis tevi vēro: VDK un tās piesegstruktūras”, ko veidojis LU un Sociālās atmiņas pētniecības centra autoru kolektīvs, atvēršanu.",
            mainText: "Vairāk nekā 25 komisijas locekļu, piesaistīto ekspertu un stipendiātu pētījumi, kas ir veikti laikposmā no 2016. gada janvāra līdz septembrim, tiek publicēti šajā un nākamajos rakstu sējumos. Trešajā sējumā desmit pētnieku skatījumi uz PSRS totalitāro un administratīvi birokrātisko režīmu, tā īstenotajām represijām, kā arī VDK piesegstruktūrām. Komunikāciju zinātņu doktora Mārtiņa Kaprāna vadīto Sociālās atmiņas pētniecības centru pārstāv, piemēram, literatūrzinātniece, filoloģijas doktore Inguna Daukste-Silasproģe ar apskatu par LPSR Miera aizstāvēšanas komiteju, kuras mītne PSRS okupācijas gados  bija arhitekta Heinriha Šēla savrupnams Gorkija ielā 11a.\nRedakcijas kolēģiju vada vēstures doktors Kārlis Kangeris, tajā ir juridisko zinātņu doktore Kristīne Jarinovska, vēstures doktori Mēlis Maripū (Igaunija) un Arūns Bubnis (Lietuva). Zinātniskā redaktore ir Kristīne Jarinovska, literārā redaktore – Ieva Kalniņa.\n\nAtklāšanā vērtējumu sniegs Latvijas Universitātes rektors akadēmiķis Indriķis Muižnieks, 12. Saeimas Cilvēktiesību un sabiedrisko lietu komisijas priekšsēdētājs,vēstures doktors Ritvars Jansons un Valsts valodas centra direktors profesors Māris Baltiņš.\n Pirmie 50 lasītāji pēc atvēršanas saņems grāmatas eksemplāru bez samaksas."
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