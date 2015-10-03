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
            selected: -1,
            nuevo: function(){
                categoria = {};
                categoria.nombre = $scope.categoriaModal.nombre;
                categoria.id = generateId($scope.cartaMenu);
                categoria.productos = [];
                $scope.cartaMenu.push(categoria);
                $scope.categoriaModal.nombre = "";
            },
            borrar: function(index){
                if (confirm('¿Esta seguro de que desea eliminar la Categoria y todos sus productos?')) {
                    $scope.cartaMenu.splice(index, 1);
                }
            },
            editar: function(index){
                $scope.categoria.selected = index;
            },
            endEdit: function(){
                $scope.categoria.selected = -1;
            }
        };

        $scope.categoriaSelected = 0;

        $scope.producto = {
            nuevo: function(idCategoria){
                $scope.categoriaSelected = idCategoria;
            },
            guardar: function(){
                var categoria = _.find($scope.cartaMenu, {id: $scope.categoriaSelected});
                var producto = angular.copy($scope.productoModal);
                producto.id = generateId(categoria.productos);
                categoria.productos.push(producto);
                $scope.productoModal.nombre = "";
                $scope.productoModal.precio = "";
            },

            editable: {
                categoria: -1,
                producto: -1
            },

            editar: function(idCateg, indexProd){
                $scope.producto.editable.categoria = idCateg;
                $scope.producto.editable.producto = indexProd;
            },

            editForm: function(categoria, producto){
                if ($scope.producto.editable.categoria == categoria && $scope.producto.editable.producto == producto) {
                    return true;
                }else{
                    return false;
                }
            },

            endEdit: function(){
                $scope.producto.editable.categoria = -1;
                $scope.producto.editable.producto = -1;
            },

            borrar: function(idCateg, indexProd){
                if (confirm('¿Esta seguro que desea eliminar el Producto?')) {
                    var categoria = _.find($scope.cartaMenu, {id: idCateg});
                    categoria.productos.splice(indexProd, 1);
                }
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

        $scope.confiteria = {};

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