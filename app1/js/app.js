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

        $scope.categoria = {
            nuevo: function(){
                categoria = {};
                categoria.nombre = $scope.categoriaModal.nombre;
                var a = $scope.cartaMenu;
                categoria.id = generateId($scope.cartaMenu);
                categoria.productos = [];
                $scope.cartaMenu.push(categoria);
            }
        };

        $scope.categoriaSelected = 0;

        $scope.producto = {
            nuevo: function(idCategoria){
                $scope.categoriaSelected = idCategoria;
                console.log($scope.categoriaSelected);
            },
            guardar: function(){
                var categoria = _.find($scope.cartaMenu, {id: $scope.categoriaSelected});
                var producto = angular.copy($scope.productoModal);
                producto.id = generateId(categoria.productos);
                categoria.productos.push(producto);
            }
        };

        function generateId(list){
            var max = _.max(list, function(list){ return list.id; });
            if ( max === -Infinity ) {
                return 1;
            }else{
                return max.id + 1;
            }
        }

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