arjocamahamageApp.controller("LandingPageController", function ($scope, $state, $interval, $location) {
    var objDiv = document.getElementsByTagName("body")[0];
    $scope.goto = function (id) {
        switch (id) {
            case 'about':
                objDiv.scrollTop = 0;
                break;
            case 'services':
                objDiv.scrollTop = document.getElementById('about').offsetHeight;
                break;
            default: //contact
                objDiv.scrollTop = document.getElementById('about').offsetHeight + document.getElementById('services').offsetHeight;
        }
    }

    $scope.redirect = function (state) {
        $state.go(state);
        objDiv.scrollTop = 0;
    }

    var promise = $interval(function () {
        var objDiv = document.getElementsByTagName("body")[0];
        if($(window).scrollTop() + $(window).height() == $(document).height()){
            document.getElementById("acontact").style.color = "black";
            document.getElementById("acontact").style.textDecoration = "underline";
            document.getElementById("aabout").style.color = "#777";
            document.getElementById("aabout").style.textDecoration = "none";
            document.getElementById("aservices").style.color = "#777";
            document.getElementById("aservices").style.textDecoration = "none";
        }
        else if (objDiv.scrollTop >= 0 && objDiv.scrollTop < document.getElementById('about').offsetHeight) {
            document.getElementById("aabout").style.color = "black";
            document.getElementById("aabout").style.textDecoration = "underline";
            document.getElementById("aservices").style.color = "#777";
            document.getElementById("aservices").style.textDecoration = "none";
            document.getElementById("acontact").style.color = "#777";
            document.getElementById("acontact").style.textDecoration = "none";
        }
        else{
            document.getElementById("aservices").style.color = "black";
            document.getElementById("aservices").style.textDecoration = "underline";
            document.getElementById("aabout").style.color = "#777";
            document.getElementById("aabout").style.textDecoration = "none";
            document.getElementById("acontact").style.color = "#777";
            document.getElementById("acontact").style.textDecoration = "none";
        }
    });

    $scope.$on('$destroy', function () {
        $interval.cancel(promise);
        promise = undefined;
    });
});

