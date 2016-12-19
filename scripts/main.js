//my scripts
//<a class="twitter-timeline" href="https://twitter.com/search?q=celebrity" data-widget-id="809566881795424256">Tweets about celebrity</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
// <a class="twitter-timeline" href="https://twitter.com/search?q=Entertainment" data-widget-id="810733489435844608">Tweets about Entertainment</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
var app = angular.module("twitterApp", ["ngRoute","ngTweets"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/main.html"
    })
    .when("/celebritySearch", {
        templateUrl : "partials/celeb.html",
        controller : "celebCtrl"
    })
    .when("/sportsSearch", {
        templateUrl : "partials/sports.html",
        controller : "sportsCtrl"
    })
});

app.controller("celebCtrl", function ($scope, $http, tweets){
    //Load the JSON Data with an SHTTP request
    tweets.get({
        widgetId: '809566881795424256'
    }).success(function(data){
        $scope.feed = data;
    });
    // .then(function(response) {
    //     //First function handles success
    //     $scope.recipeItems = response.data.hits;
    // // }, function(response) {
    // //     //Second function handles error
    // //     $scope.content = "Something went wrong";,,
    // });
});
app.controller("sportsCtrl", function ($scope, $http, tweets){
    //Load the JSON Data with an SHTTP request
    tweets.get({
        widgetId: '810733489435844608'
    }).success(function(data){
        $scope.feed = data;
    });
});