arjocamahamageApp.controller("ChatController", function ($scope, $interval) {
    var chatElement = document.getElementById("chat");
    var scrollBarWidth = 0;

    $scope.hide = true;
    $scope.show = function (){
        $scope.hide = !$scope.hide;
    }

    var chatListener = $interval(function () {
        if (document.getElementById("about") != null) {
            scrollBarWidth = window.innerWidth - document.getElementById("about").offsetWidth;//element about is 100% width
            chatElement.style.top = (window.innerHeight - document.getElementById("chat").offsetHeight) + document.getElementsByTagName("body")[0].scrollTop + "px";
            chatElement.style.left = window.innerWidth - (document.getElementById("chat").offsetWidth + scrollBarWidth) + "px";
            chatElement.style.height = document.getElementById("chatHeader").offsetHeight + document.getElementById("chatBody").offsetHeight + document.getElementById("chatFooter").offsetHeight + "px";
            document.getElementById("chatBody").style.minHeight = "70px";
            document.getElementById("chatBody").style.maxHeight = "400px";
        }
        if (document.getElementById("portfolioHeader") != null) {
            scrollBarWidth = window.innerWidth - document.getElementById("portfolioHeader").offsetWidth;//element about is 100% width
            chatElement.style.top = (window.innerHeight - document.getElementById("chat").offsetHeight) + document.getElementsByTagName("body")[0].scrollTop + "px";
            chatElement.style.left = window.innerWidth - (document.getElementById("chat").offsetWidth + scrollBarWidth) + "px";
            chatElement.style.height = document.getElementById("chatHeader").offsetHeight + document.getElementById("chatBody").offsetHeight + document.getElementById("chatFooter").offsetHeight + "px";
            document.getElementById("chatBody").style.minHeight = "70px";
            document.getElementById("chatBody").style.maxHeight = "400px";
        }
        
    })
    
})