var arjocamahamageApp = angular.module('arjocamahamageApp', ['ui.router', 'LocalForageModule']);
arjocamahamageApp.run(function ($state, $rootScope, $interval) {
    $state.go('home');

    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
        console.log('Started');
    })

    $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
        console.log('Success');
        document.getElementsByTagName("body")[0].scrollTop = 0;
    })

    //remove somee ads every 1 sec
    $interval(function () {
        $(document).ready(function () {
            $("div[style='opacity: 0.9; z-index: 2147483647; position: fixed; left: 0px; bottom: 0px; height: 65px; right: 0px; display: block; width: 100%; background-color: #202020; margin: 0px; padding: 0px;']").remove();
            $("div[style='margin: 0px; padding: 0px; left: 0px; width: 100%; height: 65px; right: 0px; bottom: 0px; display: block; position: fixed; z-index: 2147483647; opacity: 0.9; background-color: rgb(32, 32, 32);']").remove();
            $("div[style='height: 65px;']").remove();
            $("div[onmouseover='S_ssac();']").remove();
            $("center").remove(".ng-scope");
            var element = document.getElementsByTagName("center");
            for (var index = element.length - 1; index >= 0; index--) {
                if (element[index].outerHTML == '<center><a href="http://somee.com">Web hosting by Somee.com</a></center>') {
                    console.log(element[index]);
                    element[index].innerHTML = "";
                }
            }
        });
    }, 1000);
});

arjocamahamageApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
    .state('home',
    {
        url: '/home',
        templateUrl: "Home/Home",
    })

    .state('portfolio',
    {
        url: '/portfolio',
        templateUrl: "Home/Portfolio",
        controller: "PortfolioController"
    })
});