import moment from 'moment';
export default function DetalhesVeiculosController($scope, $http, $window, VeiculosService) {
  'ngInject';
  var controller = this;
  
  $scope.obterTitulo = function()
  {
    return controller.veiculo && controller.veiculo._id ? 'Edição de Veículo' : 'Novo Veículo';
  };

  $scope.obterTextoBotaoOk = function()
  {
    return controller.veiculo && controller.veiculo._id ? 'SALVAR' : 'ADD';
  };

  $scope.ok = function()
  {
    var editando = controller.veiculo._id;
    VeiculosService.salvar(controller.veiculo);
    if(!editando)
    {
      $window.location.reload();
    }
  };
}