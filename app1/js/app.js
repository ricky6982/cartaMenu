var app = angular.module('app', ['ui.router']);

app.config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/menu.html'
            })
            .state('info', {
                url: '/info',
                templateUrl: 'templates/info.html'
            })
            .state('cartaMenu', {
                url: '/cartaMenu',
                templateUrl: 'templates/cartaMenu.html'
            })
        ;
    }
]);

app.controller('AppCtrl', [
    '$scope',
    function($scope){

    }
]);