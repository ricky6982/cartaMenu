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
        $scope.cartaMenu = [
            {
                id: 1,
                nombre: "Desayuno",
                productos: [
                    {
                        id: 100,
                        nombre: "Café Doble",
                        precio: 16.00
                    },
                    {
                        id: 101,
                        nombre: "Café Con Leche Doble",
                        precio: 18.00
                    }
                ]
            }
        ];
    }
]);