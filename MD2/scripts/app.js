var app = angular.module('app', ["ngRoute"]);
app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/MD2/pages/zinas.html"
            }).when("/zinas", {
                templateUrl: "/MD2/pages/zinas.html"
            }).when("/zinas/:zina", {
                templateUrl: "/MD2/pages/page.html"
            }).when("/fakultates", {
                templateUrl: "/MD2/pages/fakultates.html"
            }).when("/studentiem", {
                templateUrl: "/MD2/pages/studentiem.html"
            }).when("/bibliotekas", {
                templateUrl: "/MD2/pages/bibliotekas.html"
            });
    }]);

app.run(['$rootScope',
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

app.controller('PageController', [
    '$scope', '$rootScope', '$routeParams',
    function ($scope, $rootScope, $routeParams) {
        $scope.zina = $rootScope.newsText[$routeParams.zina];
    }
]);

app.controller('FakultatesController', [
    '$scope', '$rootScope',
    function ($scope, $rootScope) {
        $scope.fakultates = $rootScope.fakultates;
    }
]);

app.controller('BibliotekasController', [
    '$scope', '$rootScope',
    function ($scope, $rootScope) {
        $scope.bibliotekas = $rootScope.bibliotekas;
    }
]);
app.controller('StudentiemController', [
    '$scope', '$rootScope',
    function ($scope, $rootScope) {
        $scope.studentiem = $rootScope.studentiem;
    }
]);
app.controller('MenuController', [
    '$scope', '$rootScope', '$location',
    function ($scope, $rootScope, $location) {
        $scope.getClass = function (path) {
            return $location.path().indexOf(path) ? '' : 'active';
        }
    }
]);

var news = [
    {
        id: 0,
        title: "Ziemassvētku vecītis - ir! Dekāni sveic visus Ziemassvētkos!",
        img: "Pictures/ZSvetki.jpg",
        display: "large",
        color: "rgb(51,51,51)"
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
        color: "rgba(235, 235, 210, 0.8)"
    }
];

var newsText = [
    {
        title: "Ziemassvētku vecītis - ir! Dekāni sveic visus Ziemassvētkos!",
        startText: "Tas, ka visiem brīnumiem ir kāds izskaidrojums un arī reāls pamats, arvien pierādījies laika gaitā, jo vairāk atklājot un aizpildot mūsu zināšanu baltos plankumus. Gada nogales jauko gaidu laikā aktualizējas Ziemassvētku vecīša personības fenomens. Neviens nav redzējis, kā viņš tās lietas dara, bet dāvanas aizvien sarūpē, un prieku lieliem un mazākiem rada. Šajā brīnumainajā Ziemassvētku sagaidīšanas nedēļā lūdzām Latvijas Universitātes fakultāšu dekānus sniegt pierādījumus un citas zīmes, kas liecina par Ziemassvētku vecīša esamību. Tātad - vārds LU fakultāšu dekāniem, kuru vēstījumu ievada LU prorektors eksakto, dzīvības un medicīnas zinātņu jomā Valdis Segliņš. Viņam šodien piebiedrojas Bioloģijas fakultātes dekāns Nils Rostoks un Datorikas fakultātes dekāns Juris Borzovs. Turpmākajās nedēļas dienās jūs uzrunās citu LU fakultāšu dekāni.",
        mainText: "Juris Borzovs, Dr.habil.dat., prof., LU Datorikas fakultātes dekāns\n\nApgalvojums 1. Ziemassvētku vecītis eksistē.\nApgalvojums 2. Ziemassvētku vecītis neeksistē.\nApgalvojums 3. Ikviena izteikta doma ir meli (Heraklits).\n\nNo datorzinātnes viedokļa var būt tā, ka ar nenulles varbūtību patiess ir Apgalvojums 1, un vienlaikus ar nenulles varbūtību patiess ir Apgalvojums 2.\nSveicu visus Ziemassvētkos!\n\n***\n\nLU Bioloģijas fakultātes kolektīva vārdā  - dekāns asoc. prof. Nils Rostoks\n\nJau atkal atnācis gada laiks, kad bērneļi mirdzošām acīm zīmē, līmē un raksta vēstules Ziemassvētku vecītim. Savukārt vecāki nervozi mēģina izdomāt, kā noorganizēt kādu Ziemassvētku vecītim līdzīgu personāžu. Izvēle nereti krīt uz kādu bioloģisku objektu, kurš skolas laikā ir aktīvi apmeklējis teātra pulciņu, vai kuram ir izteikts pašvērtējuma/patieso spēju disbalanss. Šādi risinājumi izteikti grauj mūsu sabiedrības jaunāko un neaizsargātāko locekļu ticību Eiropas Savienībai un Junkera plānam. Biologi šeit, protams, var piedāvāt savus īpašos risinājumus, lai vilks būtu paēdis, bet ziemeļbrieži dzīvi.\nGalu galā, ja Šrēdingera kaķis varēja būt gan dzīvs, gan beigts, kāpēc gan to pašu kvantu efektu ietekmē Ziemassvētku vecītis nevarētu vienlaicīgi ievelties pa daudziem tūkstošiem skursteņu, kamēr viņa kvantizētie ziemeļbrieži dārzā apēd pēdējos nenovāktos burkānus.\nBet, ja kvantu mehānika nelīdz, var ņemt palīgā klonēšanu. Aizmirstiet aitas! Klonēt Zsvētku vecīšus ir daudz interesantāk, tikai jāizdomā, ko ar šo klonu armiju iesākt pārējā laikā. Tiešām bioloģiskie risinājumi ir visradošākie, jo tie var būt tikpat daudzveidīgi kā dzīvā daba. Fizikā viss pakļaujas stingri noteiktām likumsakarībām, bet, ja nepakļaujas, tad tās nav nekādas likumsakarības. Savukārt bioloģijā likumsakarības nemaz nepastāv, ir tikai vienas vienīgas izņēmuma situācijas. Turklāt, ja liekas, ka izdevies atrast likumsakarību, pagaidiet, tas nozīmē, ka dotais jautājums nav pietiekami labi izpētīts. Kur gan teikts, ka Zsvētku vecītim jābūt aptuveni tāda paša izmēra kā mums? Varbūt tāpēc arī neviens to nav redzējis, ka viņi ir pavisam maziņi, aptuveni rauga šūnu lielumā? Tas, starp citu, pavērtu plašas iespējas ar sintētiskās genomikas palīdzību katram savā garāžā uzkonstruēt savu īpašo ziemassvētku vecīšu celmu, kas papildus tradicionāli koši sarkanajam fenotipam spētu sintezēt molekulas ar augstu pievienoto vērtību, tādējādi veicinot Latvijas bioekonomijas ekosistēmas uzplaukumu un vispārēju jautrību.\n\nGaišus un priecīgus Ziemassvētkus un bioloģiskiem atklājumiem bagātu 2017. gadu!"
    },
    {

        title: "LU kopā ar čekas zinātniskās izpētes komisiju atvērs rakstu “Lielais brālis tevi vēro” 3. sējumu",
        startText: "LPSR Valsts drošības komitejas zinātniskās izpētes komisija kopā ar Latvijas Universitāti (LU) un LPSR VDK pret latviešu tautu veikto totalitāro noziegumu dokumentu digitalizācijas krātuvi aicina 7. decembrī plkst. 17.30 Šēla savrupnamā, Krišjāņa Valdemāra ielā 11a, Rīgā (Kultūras ministrija), uz rakstu 3. sējuma “Lielais brālis tevi vēro: VDK un tās piesegstruktūras”, ko veidojis LU un Sociālās atmiņas pētniecības centra autoru kolektīvs, atvēršanu.",
        mainText: "Vairāk nekā 25 komisijas locekļu, piesaistīto ekspertu un stipendiātu pētījumi, kas ir veikti laikposmā no 2016. gada janvāra līdz septembrim, tiek publicēti šajā un nākamajos rakstu sējumos. Trešajā sējumā desmit pētnieku skatījumi uz PSRS totalitāro un administratīvi birokrātisko režīmu, tā īstenotajām represijām, kā arī VDK piesegstruktūrām. Komunikāciju zinātņu doktora Mārtiņa Kaprāna vadīto Sociālās atmiņas pētniecības centru pārstāv, piemēram, literatūrzinātniece, filoloģijas doktore Inguna Daukste-Silasproģe ar apskatu par LPSR Miera aizstāvēšanas komiteju, kuras mītne PSRS okupācijas gados  bija arhitekta Heinriha Šēla savrupnams Gorkija ielā 11a.\nRedakcijas kolēģiju vada vēstures doktors Kārlis Kangeris, tajā ir juridisko zinātņu doktore Kristīne Jarinovska, vēstures doktori Mēlis Maripū (Igaunija) un Arūns Bubnis (Lietuva). Zinātniskā redaktore ir Kristīne Jarinovska, literārā redaktore – Ieva Kalniņa.\n\nAtklāšanā vērtējumu sniegs Latvijas Universitātes rektors akadēmiķis Indriķis Muižnieks, 12. Saeimas Cilvēktiesību un sabiedrisko lietu komisijas priekšsēdētājs,vēstures doktors Ritvars Jansons un Valsts valodas centra direktors profesors Māris Baltiņš.\n Pirmie 50 lasītāji pēc atvēršanas saņems grāmatas eksemplāru bez samaksas."
    },
    {
        title: "Mērķis – mainīt un ietekmēt dzīvi. Latvijas Universitātes nākamie 100 gadi zinātnē",
        startText: "Universitātei pēc trijiem gadiem apritēs 100 gadu. Tās dibināšana bija otrais nozīmīgākais notikums aiz Latvijas valsts dibināšanas. Toreiz visiem bija ļoti lielas gaidas attiecībā uz valstiskumu, zināšanām un savu universitāti. Kā Latvijas Universitāte (LU) pilda savu misiju, cik tā ir ietekmīga un spēcīga zinātnē – par to LU prorektors eksakto, dzīvības un medicīnas zinātņu jomā – profesors Dr. ģeol. VALDIS SEGLIŅŠ stāsta intervijā šoruden iznākušajā LU žurnāla “Alma Mater” numurā. Piedāvājam ar to iepazīties arī visiem portāla lasītājiem.",
        mainText: "Kādi bijuši aizejošie 100 gadi Latvijas Universitātei, bet galvenokārt – kāda ir LU vīzija nākamajiem 100 gadiem?\n\n100 gados Latvijas vēsturē mums ir gājis ļoti dažādi. Ir bijis daudz spēlmaņu, mainījušās varas, laiki un notikumi, ko ne valsts, ne Universitātes dibinātāji savulaik nevarēja prognozēt, jo tas putras katls ir atradies ārpus Latvijas. Vienmēr esam bijuši iekļauti svešu varu spēlēs un to diktētajos noteikumos. Mūsu morāle ir tā, ka arvien esam varējuši izdzīvot. Pirmie 100 gadi ir bijis izdzīvošanas laikmets, kurā mēs gan kā valsts, gan kā universitāte esam parādījuši, ka gan kritumos, gan horizontālās attīstības posmos esam varējuši izdzīvot un sevi pierādīt. Par spīti visam, valsts ir atjaunota, nostiprināta, mēs lepojamies ar to. Domāju, ka, tāpat kā ar valsti, mēs varam lepoties arī ar savu Universitāti.\n\nPatlaban mēs par valsti vairs nešaubāmies, un, ceru, ka to sakām no sirds. Ļoti gribētu, lai tāda pati sajūta visiem valstī būtu arī par Universitāti – lai šo šaubu nebūtu. Turpmāk mums vairs nevajadzētu pierādīt savas eksistences pamatotību un lietderību. Esam starp pieciem procentiem pasaules vislabāko universitāšu. Tas ir pietiekami pārliecinošs arguments. Ceru, ka nākamās paaudzes sapratīs, un Universitāte to veicinās, ka pašsaprotamas lietas, vērtības, kas pieder valstiskumam, ir jāuztur neatkarīgi no tā, kādi ir dzīves notikumi. Līdzās dabaszinātnēm un eksaktajām zinātnēm ir jomas – humanitārās zinātnes, kultūra, māksla –, kuras tiek apgūtas fakultātēs un institūtos un kuras uzturēt ir mūsu nacionālais pienākums neatkarīgi no tā, vai tas mums ir izdevīgi, lietderīgi, vai pašlaik redzam atdevi. Ceru, ka nākamajā simtgadē šīs būs vērtības, par ko vairs nebūs jādiskutē, jo tās būs pašsaprotamas. Lai nākamajos 100 gados mēs nebūtu tie, ar kuriem var rīkoties, lai mēs būtu pietiekami stipri un patstāvīgi, visupirms jau savās galvās un arī savos lēmumos, izvēlēs pat tad, ja lielās zinātnes politikas lēmumus pieņem citur, lai mēs būtu līdzvērtīgi partneri pētniecības, zinātnes, izglītības, kultūras pasaulē. Lai mēs nebūtu tie, ar kuriem varēja spēlēties iepriekšējā gadsimtā. Lai mūsu nacionālā universitāte būtu līdzvērtīga līdzās lielām varām."
    },
    {
        title: "1. decembrī Radio NABA ēterā būs dzirdama īpaša 14. dzimšanas dienas svētku programma",
        startText: "Ceturtdien, 1. decembrī visas dienas garumā Latvijas Radio 6 - LU Radio NABA savā 14. dzimšanas dienā dāvina klausītājiem īpašu svētku programmu, kurai varēs sekot līdzi ne vien radio uztvērējos FM 95,8 un mobilajās lietotnēs, bet arī vērot interneta video tiešraidē vietnē Naba.lv. Svētku sajūtu nodrošinās Radio NABA personības, ētera viesi un astoņi dzīvās mūzikas priekšnesumi, ar kuriem Radio NABA studijā uzstāsies grupas “MMMM”, “Dzidriņas megasistēma”, “Laika suns”, “Rāva”, “Riga Reggae” un Horens Stalbe, kā arī Jēkabs Nīmanis, Alise Joste un Riharda Bražinska projekts “UD”.",
        mainText: "Dzimšanas dienas svinības atklās atraktīvais raidījums “Nabarīts”. Plkst. 12.00 studijā viesosies Uldis Lavrinovičs, Latvijas Radio valdes loceklis tehniskā nodrošinājuma jautājumos un plkst. 14.00 radio klausītājus uzrunās prof. Indriķis Muižnieks, Latvijas Universitātes rektors. Muzikālajiem priekšnesumiem audio un video tiešraidē no Radio NABA studijas varēs sekot līdzi no plkst. 13.00 līdz plkst. 21.00. Grupu un mūziķu aptuvenais uzstāšanās ilgums ir 20 minūtes."
    },
    {
        title: "Latvijas Universitāte sāk ilgtermiņa sadarbību ar Eiropas Ājurvēdas akadēmiju Vācijā",
        startText: "21. novembrī, Latvijas Universitātes (LU) rektoram Indriķim Muižniekam parakstot nodomu protokolu ar Rosenberg European Academy of Ayurveda dibinātājiem - Marku un Kerstinu Rozenbergiem -, kuri bija ieradušies vizītē Latvijā, lai nolasītu arī lekciju “Uzturs un ājurvēda”, sākas daudzsološa sadarbība ar akadēmiju, kurai apmācībā ājurvēdā ir 23 gadu pieredze, vairākās programmās, kas dos iespējas gan LU studentiem mācībām Vācijā, gan vieslektoru piesaistē LU Medicīnas fakultātē un LU Komplemetārās medicīnas centrā.",
        mainText: "“Vienojāmies par iespējamo sadarbību ārstu tālākizglītības programmās, meklējot komplementārās medicīnas pielietojumu mūsdienās, aplūkojot ne tikai cilvēka bioķīmiski fizioloģisko pusi, bet arī personības vienotības pieeju medicīnas metožu izmantošanā,” pēc nodomu protokola parakstīšanas ar Eiropas Ājurvēdas akadēmijas dibinātājiem Marku un Kerstinu Rozenbergiem tā nozīmi raksturoja LU rektors Indriķis Muižnieks. “Kolēģiem no Vācijas ir vairāk nekā 20 gadu pieredze šādu ārstu kursu organizēšanā, un mēs ceram to likt lietā arī pie mums.”\n\n“Mums ir bagātīga pieredze ājurvēdas apmācības izmantošanā,” uzsvēra Eiropas Ājurvēdas akadēmijas dibinātājs Marks Rozenbergs. “Apmācām ārstus ājurvēdas tālākizglītības programmās. Ir arī maģistru programma. Un tā kā mums ir studenti, kuri nodarbojas ar pētniecību un zinātni, tad sadarbība ar Latvijas Universitāti būtu iespējama gan studentu, gan arī pasniedzēju apmaiņā. Šo sadarbību redzam kā ilgtermiņa projektu.”\n\nRosenberg European Academy of Ayurveda ir 23 gadu pieredze Vācijā, šo pieredzi Rozenbergi dāsni piedāvā pārņemt arī Latvijā. “Nupat Vācijā šos ājurvēdas pakalpojumus veselības apdrošinātāji atzinuši kā medicīniskos pakalpojumus,” pastāstīja Eiropas Ājurvēdas akadēmijas dibinātājs M. Rozenbergs.\n\n“Tas ir liels solis priekšā mūsu medicīnas sistēmai,” skaidroja LU Komplemetārās medicīnas centra vadītāja Guna Bīlande.\n\nEiropas Ājurvēdas akadēmijas dibinātāja Kerstina Rozenberga, viesodamās LU, nolasīja lekciju “Uzturs un ājurvēda”. “Ar ikdienas uzturu un dzīvesveidu var risināt savas veselības problēmas,” sacīja Kerstina Rozenberga. “Jau Hipokrāts ir teicis, ka uzturs var būt mūsu zāles.” Lekcijā viņa sniedza praktiskos piemērus, jo tā bija domāta ne tikai medicīnas speciālistiem, bet visiem, kas interesējas par šo tēmu."
    },

    {
        title: "LU rektors Indriķis Muižnieks uzklausa bijušo rektoru idejas attīstībai",
        startText: "Latvijas Universitātes (LU) rektors Indriķis Muižnieks, turpinot savu pērn sākto tradīciju, LU Profesoru klubā 15. novembrī tikās ar bijušajiem LU rektoriem Juri Zaķi, Ivaru Lāci un Mārci Auziņu, lai pārrunātu svarīgus LU attīstības jautājumus, kuros viņu pieredze un idejas lieti noder.",
        mainText: "“Kopā ar bijušajiem rektoriem ļoti pozitīvi vērtējam jaunās Latvijas Universitātes akadēmiskās pilsētiņas Torņakalnā attīstību,” akcentējot rektoru lietišķajās pusdienās 15. novembrī pārrunāto, uzsver LU rektors Indriķis Muižnieks. “Viņi ieteica vēl dažādus ceļus, kā varētu piesaistīt naudu, lai tur varētu izveidot visu iecerēto. Bijušie rektori izteica atbalstu notiekošajai administrācijas koncentrēšanai Raiņa bulvārī 19 un solīja palīdzēt, lai īstenotu ilgi domāto un runāto pilnībā.“\n\nLU rektors uzskata, ka tradīcija kopā sanākt esošajam un bijušajiem rektoriem nav nekas jauns: “Latvijas Universitātē  tagad ir izveidojusies četru rektoru pēctecība, mums visiem ir bijušas tomēr vienotas intereses un idejas par Universitātes attīstību. Manuprāt, vienmēr ļoti noderīgi ir ne tikai ikdienā, bet arī tad, kad nāk svētku reizes, kā tagad, tuvojoties Latvijas valsts dzimšanas dienai un atzīmējot bijušā rektora Jura Zaķa 80 gadu jubileju, apmainīties ar domām. Man ir ļoti svarīgi ņemt vērā kolēģu pieredzi, jo tā var uzzināt daudzas vērtīgas lietas, ko kādreiz no grāmatu gudrībām vien nevar saprast.”\n\nMārcis Auziņš to, kas notiek LU, pusgadu vēroja iztālēm, atrodoties Bērklijas Universitātē ASV. Viņš ir tikko atgriezies, tur guvis idejas. Sociālajos tīklos viņš no ASV vairākkārt bija rakstījis, ka LU līmenis, salīdzinot ar Bērkliju, ir labs. “Pavisam noteikti, vismaz tajā, ko varu profesionāli salīdzināt – fizikā – mēs, LU, esam gana labi,” arī tagad uzsver LU bijušais rektors Mārcis Auziņš. “Viens ļoti konkrēts apliecinājums tam - tikko ir nolaidusies lidmašīna, un no Bērklijas ir ieradušies kolēģi veikt šeit, Rīgā, eksperimentus, jo ir lietas, kurās mēs esam pavirzījušies drusku tālāk nekā viņi. Tā kā tās darām kopā, nav vērts dublēt Amerikā vai Vācijā to, kas jau paveikts LU. Patlaban sadarbojamies trīs universitātes – Bērklijas Universitāte ASV, Maincas Universitāte Vācijā un LU. Šis ir veiksmīgs piemērs tam, ka sadarbojamies līdzvērtīgi.”"
    },
    {
        title: "Iznācis Latvijas Universitātes žurnāla “Alma Mater” rudens numurs",
        startText: "Latvijas Universitātes (LU) prorektors eksakto, dzīvības un medicīnas zinātņu jomā profesors Dr. ģeol. Valdis Segliņš uzskata, ka Latvijas Universitātei arī turpmāk jābūt tai, kas maina pasauli, nevis tikai seko, iet līdzi. Prorektors analizē, cik stipra ir zinātne Alma Mater, kādi ir turpmākie LU uzdevumi un kādu izaicinājumu priekšā izglītībā ir visa Latvijas sabiedrība. LU izvērš zinātnes komercializāciju, bet jauni ceļi ne vienmēr ir gludi - šā procesa virzītāji dalās pirmajās atziņās. LU Pedagoģijas vēstures muzeja vadītāja Aīda Krūze kopš bērnības sapņojusi kļūt par skolotāju, un sapnis ir piepildījies. Jaunā studenta svētki - Aristotelis - nosvinējis 50. dzimšanas dienu - tam ir bagāta vēsture, bet jāgādā, lai neaizmirstama un vērienīga būtu arī nākotne. Kādas vērtības Universitātes pamatos ir ielicis pirmais rektors Ernests Felsbergs, kuram aprit 150 gadu? Vispirms - racionālu skaidrību un rūpes par cilvēkiem. LU polārpētnieki pirmoreiz “iekaro” Grenlandi, un - veiksmīgi. Sākam jaunu ciklu - “Jaunie doktori”, lai izdibinātu, kāpēc ir vērts iet uz šo mērķi. Šoreiz to stāsta komunikācijas zinātņu doktore Laura Ardava, kuru intervē otra doktore - Zane Radzobe. Un visbeidzot - tādi fani, kādi ir LU basketbolistiem, nav nevienam citam. Lepojamies.",
        mainText: "Mērķis – mainīt un ietekmēt dzīvi\n\nLatvijas Universitātes nākamie 100 gadi zinātnē\n\nUniversitātei pēc trijiem gadiem apritēs 100 gadu. Tās dibināšana bija otrais nozīmīgākais notikums aiz Latvijas valsts dibināšanas. Toreiz visiem bija ļoti lielas gaidas attiecībā uz valstiskumu, zināšanām un savu universitāti. Kā Latvijas Universitāte (LU) pilda savu misiju, cik tā ir ietekmīga un spēcīga zinātnē – par to intervijā - LU prorektors eksakto, dzīvības un medicīnas zinātņu jomā – profesors Dr. ģeol. VALDIS SEGLIŅŠ. “Mēs iesaistām studentus pētniecībā, lai viņi mainītu pasauli,” saka V. Segliņš. Guntis Rozenbergs\n\nKā pārdot zinātni?\n\nLatvijas Universitāte aktīvi izvērš zinātnes komercializāciju. Lielas iespējas gan zinātniekiem, gan uzņēmējiem\nLU pētnieki, pasniedzēji un studenti katru dienu veic pētījumus, kuru rezultātā nereti rada inovācijas: jaunas vai uzlabotas ražošanas tehnoloģijas un metodes, kā arī pilnīgi jaunus produktus. Bieži vien šie pētījumi ir augstas kvalitātes un var sniegt būtisku ieguldījumu tautsaimniecības attīstībā, taču nereti tie paliek tikai teorētiskā vai eksperimentālā līmenī, zinātniskā darba secinājumu daļa iegulst kādā arhīva mapē vai pētījuma potenciāls paliek neizsmelts laika un pastāvīga finansējuma trūkuma dēļ. Galvenie darbības virzieni pašlaik ir identificēt konkrētu Latvijas uzņēmumu nepieciešamību pēc P&A un piemeklēt atbilstošus potenciālos pētījumu veicējus no LU pētnieku vidus, kā arī proaktīvi piedāvāt dažādiem uzņēmumiem LU zinātnieku konsultācijas, iestrādnes un LU infrastruktūras iespējas. Jānis Tamužs\n\nMuzejs un zinātnes vēsture\n\nPedagoģijas vēstures muzejam Anniņmuižā šogad - 10 gadu jubileja!\n“Muzejs ir ne tikai vēstures liecību krātuve, bet arī studiju un pētniecības vieta, un šādam muzejam jābūt tur, kur ir studenti, kur vēsturisko pieredzi var nodot jaunajai paaudzei,” uzskata Latvijas Universitātes (LU) Pedagoģijas vēstures muzeja vadītāja Aīda Krūze. Pirms desmit gadiem atklāšanas lenti pārgrieza tagadējais LU rektors Indriķis Muižnieks, kurš tolaik bija zinātņu prorektors. „Paveikts ir daudz, bet nākotnes ieceru vēl vairāk,” ar smaidu par savu sirdsdarbu saka Aīda Krūze. Andra Čudare"
    },
    {
        title: "Studentu dalība Latvijas Brīvības cīņās - zelta burtiem rakstīta lappuse LU vēsturē",
        startText: "Latvijas Universitātes (LU) studentu un mācībspēku dzimtenes mīlestība, patriotisms jau kopš tās pirmsākumiem ir ievērības, atceres un atdarināšanas cienīgi. Studenti par Latvijas brīvību un valsts neatkarību cīnījušies ne tikai ar gara spēku, bet arī ar ieročiem rokās un krituši par to. Dzīvību par dzimteni atdevušo 18 studentu vārdi 1922. gadā ir iemūžināti plāksnē, kas novietota LU Mazajā aulā. Studentu varonība Latvijas Brīvības cīņās lai ir kā patriotisma un iedvesmas avots mums šodien būt nomodā par savu valsti.",
        mainText: "Jau pirms Latvijas Universitātes (līdz 1923. gadam - Latvijas Augstskola) dibināšanas 1919. gada 28. septembrī studenti bija tie, kuri apsargāja tikko dzimušās Latvijas valsts valdību un cēlās dzimtenes aizstāvībai, izveidojot Studentu rotu. 1919. gada oktobrī, kad uzbrukumu Rīgai un visai Latvijai sāka Bermonta karaspēks, vairāk nekā puse Augstskolas studentu atradās armijā.\n\nPlāksne  ar iegravētiem 18 studentu vārdiem un uzvārdiem LU Mazajā aulā ir ļoti konkrēta liecība par Latvijas Brīvības cīņām, par notikumiem Latvijā 1918. -1920. gadā. Šo plāksni LU veltīja tiem Latvijas Augstskolas un Rīgas Politehniskā institūta studentiem, kuri gāja bojā Brīvības cīņu laikā.\n\n“Divas spilgtākās epizodes Latvijas Brīvības cīņu vēsturē ir Atsevišķās (Studentu) rotas izveide 1918. gada beigās un  Atsevišķā (Studentu) bataljona izveide 1919. gada oktobrī,” stāsta Latvijas Okupācijas muzeja vēsturnieks Dr. hist. Kārlis Dambītis. “Ir jāuzsver studentu brīvprātīgā iesaiste militāros formējumos ar nolūku aizstāvēt jaunizveidotās Latvijas valsts Pagaidu valdību un savas valsts ideju.”"
    },
    {
        title: "Latvijas Universitāte atzīmē tās pamatlicēja Ernesta Felsberga 150 gadu jubileju",
        startText: "7. novembrī par godu Latvijas Universitātes (LU) pirmā oficiāli ievēlētā rektora Ernesta Felsberga 150 gadu jubilejai (1866.07.XI - 1928.31.VIII), Universitātes Humanitāro un sociālo zinātņu centra Konferenču zālē, Kalpaka bulvārī 4, notika LU Bibliotēkas organizēta konference “LU pirmajam rektoram, profesoram Ernestam Felsbergam - 150”.",
        mainText: "Konferenci ,,LU pirmajam rektoram, profesoram Ernestam Felsbergam - 150” atklāja LU rektors profesors Indriķis Muižnieks, uzsverot pirmā rektora Alma Mater šūpulī likto vērtību pamatīgumu un mūsdienīgumu. Konferencē uzstājās Latvijas Universitātes Filozofijas un socioloģijas institūta vadošā pētniece, Dr. phil., Māra Kiope ar referātu “Rektora E. Felsberga principi”,  Latvijas Universitātes Vēstures un filozofijas fakultātesprofesors, Dr. hist Ēriks Jēkabsons ar referātu “Profesors E. Felsbergs (1866-1928): Vieta Latvijas vēstures telpā”. Savukārt Latvijas Universitātes Humanitāro zinātņu fakultātes profesore, Dr.phil., Ilze Rūmniece savā priekšlasījumā iepazīstināja ar LU pirmā rektora skatījumu klasiskajā humanitārajā izglītībā, bet LU Bibliotēkas direktores vietnieces Мg.sci.soc. Mārīte Savičas referātā stāstīja par profesoru  E. Felsbergu saistībā ar Mākslas kabinetu.\n\nLU pirmais rektors Ernests Felsbergs ir viens no tiem, kurš savu dzīvi veltījis, lai izveidotu Latvijas Universitātes pamatus. Šis drošais pamats ir racionāla skaidrība, vienkāršība, patiesā, labā un skaistā izkopšana, rūpes par cilvēkiem, kas strādā kā mācībspēki un zinātnieki, koleģiālas kopības veidošana, kas ļautu attīstīties personībai."
    },
    {
        title: "Latvijas Universitāte sveic valsts 98. gadadienā!",
        startText: "Latvijas Universitāte sveic studentus, pasniedzējus un darbiniekus Latvijas 98. gadadienā!",
    }
];

var fakultates = [
    {
        title: "Bioloģijas fakultāte",
        img: "Pictures/Icons/bacteria.png"
    },
    {
        title: "Datorikas fakultāte",
        img: "Pictures/Icons/monitor.png"
    },
    {
        title: "Biznesa, vadības un ekonomikas fakultāte",
        img: "Pictures/Icons/clipboard.png"
    },
    {
        title: "Fizikas un matemātikas fakultāte",
        img: "Pictures/Icons/statistics.png"
    },
    {
        title: "Ģeogrāfijas un Zemes zinātņu fakultāte",
        img: "Pictures/Icons/earth-globe.png"
    },
    {
        title: "Humanitāro zinātņu fakultāte",
        img: "Pictures/Icons/users.png"
    },
    {
        title: "Juridiskā fakultāte",
        img: "Pictures/Icons/gavel.png"
    },
    {
        title: "Ķīmijas fakultāte",
        img: "Pictures/Icons/flasks.png"
    },
    {
        title: "Medicīnas fakultāte",
        img: "Pictures/Icons/dna-structure.png"
    },
    {
        title: "Pedagoģijas, psiholoģijas un mākslas fakultāte",
        img: "Pictures/Icons/painting-palette.png"
    },
    {
        title: "Sociālo zinātņu fakultāte",
        img: "Pictures/Icons/share.png"
    },
    {
        title: "Teoloģijas fakultāte",
        img: "Pictures/Icons/bible.png"
    },
    {
        title: "Vēstures un filozofijas fakultāte",
        img: "Pictures/Icons/history.png"
    }

];

var bibliotekas = [
    {
        title: "LU Bibliotēka",
        img: "Pictures/Icons/learning.png"
    },
    {
        title: "LU Akadēmiskā bibliotēka",
        img: "Pictures/Icons/reading1.png"
    },
    {
        title: "Kopkatalogs",
        img: "Pictures/Icons/reading.png"
    }
];

var studentiem = [
    {
        title: "Reģistrēšanās semestrim un kursiem",
        img: "Pictures/Icons/talking.png"
    },
    {
        title: "Iepazīsti LU",
        img: "Pictures/Icons/punishment.png"
    },
    {
        title: "Vakanču meklēšana",
        img: "Pictures/Icons/answer.png"
    },
    {
        title: "Atvērtā izglītība",
        img: "Pictures/Icons/classroom2.png"
    },
    {
        title: "Studentu medijs",
        img: "Pictures/Icons/learning1.png"
    },
    {
        title: "Mans portāls",
        img: "Pictures/Icons/classroom.png"
    },
    {
        title: "Studiju ceļvedis",
        img: "Pictures/Icons/sleepy.png"
    },
    {
        title: "Ieteikumi studijās",
        img: "Pictures/Icons/classroom1.png"
    },
    {
        title: "Studijas",
        img: "Pictures/Icons/learning2.png"
    },
    {
        title: "Normatīvie dokumenti",
        img: "Pictures/Icons/student1.png"
    },
    {
        title: "Studijas ārvalstīs",
        img: "Pictures/Icons/student.png"
    },
    {
        title: "Studentu aktivitātes",
        img: "Pictures/Icons/teacher.png"
    }
];