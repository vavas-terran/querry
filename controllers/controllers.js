     var app = angular.module('querry',['ngMaterial','ngRoute']);
        app.controller('nav-bar', function($scope){
            $scope.items = [
                            {
                                icon: '',
                                li  : 'Crear encuesta',
                                link: '#/demo'
                            },
                            {
                                icon: '',
                                li  : 'Estadistica',
                                link: '#/estadistica'
                            },
                            {
                                icon: '',
                                li  : 'Encuestas',
                                link: '#/encuestas'
                            },
                            {
                                icon: '',
                                li  : 'Editar perfil',
                                link: '#/editarperfil'
                            }
                            ]
                    });
    app.controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log) {
      $scope.toggleLeft = function() {
        $mdSidenav('left').toggle()
                          .then(function(){
                              $log.debug("toggle left is done");
                          });
      };
    })
    app.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
      $scope.close = function() {
        $mdSidenav('left').close()
                          .then(function(){
                            $log.debug("close LEFT is done");
                          });
      };
    })
