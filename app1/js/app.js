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
        $scope.categoriaNuevo = function(){
            categoria = {};
            categoria.nombre = $scope.categoriaModal.nombre;
            var a = $scope.cartaMenu;
            var max = _.max(a, function(a){ return a.id; });
            if ( max === -Infinity ) {
                categoria.id = 1;
            }else{
                categoria.id =  max.id + 1;
            }
            categoria.productos = [];
            $scope.cartaMenu.push(categoria);
        };

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
            },
            {
                id: 2,
                nombre: "Bebidas",
                productos: [
                    {
                        id: 102,
                        nombre: "Coca Cola 250ml",
                        precio: 10.00
                    },
                    {
                        id: 103,
                        nombre: "Fanta 1Lts",
                        precio: 18.00
                    }
                ]
            }
        ];

        dbg = {
            cartaMenu: $scope.cartaMenu
        };
    }
]);