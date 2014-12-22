     var app = angular.module('querry', ['ngMaterial', 'ngRoute']);
     app.controller('nav-bar', function($scope) {
         $scope.items = [{
             icon: '',
             li: 'Crear encuesta',
             link: '#/demo'
         }, {
             icon: '',
             li: 'Estadistica',
             link: '#/estadistica'
         }, {
             icon: '',
             li: 'Encuestas',
             link: '#/encuestas'
         }, {
             icon: '',
             li: 'Editar perfil',
             link: '#/editarperfil'
         }]
     });
     app.controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log) {
         $scope.toggleLeft = function() {
             $mdSidenav('left').toggle()
         };
     })
     app.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
         $scope.close = function() {
             $mdSidenav('left').close()
         };
     })
     app.controller('formulario', function($scope){
        //creo un scope hacia un array vacio para cargar los input ingresados desde la funcion ADD
        $scope.consignas=[];
        //creo un scope para el ng-click add del formularii
        $scope.add = function(){
        //hago un push al array Consignas y le pongo un modelo ingresado desde NewConsignas
            var newConsigna = $scope.Consigna;
            $scope.consignas.push(newConsigna);

        }
        $scope.remove = function(arrayName,$index){
            $scope[arrayName].splice($index, 1);
        }



     })
