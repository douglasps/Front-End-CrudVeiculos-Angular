import moment from 'moment';
export default function ListaVeiculosController($scope, $http, VeiculosService) {
  'ngInject';
  var veiculos = [];
  $scope.mostrarMensagem = true;

  VeiculosService.listar().then(() =>{
    veiculos = VeiculosService.listarGetState();
    $scope.mostrarMensagem = false;
  });

  $scope.ObterImagemItemVendido = function(vendido){
    if(vendido)
        return '../../assets/img/vendido_verde_20.png';
    return '../../assets/img/vendido_20.png';
  };
  
  $scope.listarVeiculos = function(){  
    return veiculos;
  };
}
