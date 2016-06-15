arjocamahamageApp.controller("LandingPageController", function ($scope, $state, $interval, $location) {
    var objDiv = document.getElementsByTagName("body")[0];
    $scope.baseUrl = "http://www.arjocamahamage.somee.com/"; //"http://localhost:6392/";
    $scope.from = 0;
    $scope.to = 0;

    $scope.goto = function (id) {
        switch (id) {
            case 'home':
                $scope.scrollTransition(0, 10, 10);
                break;
            case 'about':
                $scope.scrollTransition(0, 10, 10);
                break;
            case 'services':
                $scope.scrollTransition(document.getElementById('about').offsetHeight, 10, 10);
                break;
            default: //contact
                $scope.scrollTransition(document.getElementById('about').offsetHeight + document.getElementById('services').offsetHeight, 10, 10);
        }
    }

    //Set the traget scroll first before calling this function
    $scope.scrollTransition = function (targetScrollPosition, numberForManipulation, timeInterval) {
        $scope.targetScroll = targetScrollPosition;
        $scope.number = numberForManipulation;
        $scope.currentScroll = $(window).scrollTop();
        var scrollTrans = $interval(function () {
            if ($scope.currentScroll > $scope.targetScroll)
            {
                $scope.currentScroll = $scope.currentScroll - $scope.number;
                objDiv.scrollTop = $scope.currentScroll;
                if ($scope.currentScroll - $scope.targetScroll < $scope.number)
                    $scope.number = $scope.currentScroll - $scope.targetScroll;
            }
            else if ($scope.currentScroll < $scope.targetScroll) {
                $scope.currentScroll = $scope.currentScroll + $scope.number;
                objDiv.scrollTop = $scope.currentScroll;
                if ($scope.targetScroll - $scope.currentScroll < $scope.number)
                    $scope.number = $scope.targetScroll - $scope.currentScroll;
            }
            else
            {
                $interval.cancel(scrollTrans);
                scrollTrans = undefined;
            }
        }, timeInterval);
    }

    $scope.redirect = function (state) {
        if (state == 'portfolio')
            window.open($scope.baseUrl + "#/" + state, "_blank");
        else {
            $state.go(state);
            objDiv.scrollTop = 0;
        }
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

