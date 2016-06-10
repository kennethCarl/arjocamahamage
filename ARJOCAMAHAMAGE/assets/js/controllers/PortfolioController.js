arjocamahamageApp.controller("PortfolioController", function ($scope, $state, $http) {
    $scope.baseUrl = "http://www.arjocamahamage.somee.com/"; //"http://localhost:6392/";
    $scope.redirect = function () {
        $state.go('home');
    }

    $scope.apps = [
        {
            Name: "Resume Generator",
            Link: "http://www.resumegenerator.somee.com/",
            Details: "A web application that will help you create your resume online with some templates available, it can be printed/downloaded as MS Word format.",
            Type: "Web",
            TechnologyUsed: "Javascript, AngularJS, Bootstrap, CSS, HTML, ASP.Net MVC, Web API, Entity Framework, MSSQL"
        },
        {
            Name: "IP Subnetting",
            Details: "A mobile application that will help you subnet a class A, B and C ip address.",
            Type: "Mobile",
            TechnologyUsed: "Javascript, Ionic, Cordova, AngularJS"
        },
        {
            Name: "Ybañez-Nacua Apartment",
            Link: "http://www.resumegenerator.somee.com/",
            Details: "A web application that advertise an apartment owned by Mr. & Mrs. Edgardo Amistad Ybañez",
            Type: "Web",
            TechnologyUsed: "Javascript, AngularJS, Bootstrap, CSS, HTML, ASP.Net MVC, Web API, Entity Framework, MSSQL"
        }
    ]

    $scope.downloadApp = function (appName) {
        switch (appName) {
            case "IPSubnetting":
                alert("Allow pop-ups for this website if unable to download.");
                $http.get($scope.baseUrl + "api/generatetoken")
                .success(function (data, status) {
                    window.open($scope.baseUrl + "api/fileupload?filename=ip-subnetting.apk&token=@" + data.stringParam1, "_blank")
                })
                .error(function (data, status) {
                    if (status == 401)
                        alert("Unauthorized request.");
                    else
                        alert("Server is down");
                });
                break;
            default:
        }
    }
});