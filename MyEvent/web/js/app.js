var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl : "{{ asset('app/Resources/views/default/home.html') }}",
            controller : "mainCtrl"
        })
        .when("/about", {
            templateUrl : "about.html",
            controller : "aboutCtrl"
        })
        .when("/portfolio", {
            templateUrl : "portfolio.html",
            controller : "blogCtrl"
        })
        .when("/team", {
            templateUrl : "teams.html",
            controller : "teamCtrl"
        })
        .when("/services", {
            templateUrl : "service.html",
            controller : "serviceCtrl"
        })
        .when("/clients", {
            templateUrl : "clients.html",
            controller : "clientCtrl"
        })
        .when("/contact", {
            templateUrl : "contact.html",
            controller : "contactCtrl"
        });
});