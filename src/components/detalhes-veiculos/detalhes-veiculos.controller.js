import moment from 'moment';
export default function DetalhesVeiculosController($scope, $http, $window, VeiculosService) {
  'ngInject';
  var controller = this;
  $scope.editorVisivel = false;
  $scope.imgVendido = '../../assets/img/vendido_20.png';
  $scope.$watch('$ctrl.veiculo', () => {
    $scope.imgVendido = this.veiculo && this.veiculo.vendido
      ? '../../assets/img/vendido_verde_20.png'
      : '../../assets/img/vendido_20.png';
  });
  $scope.excluir = function()
  {
    VeiculosService.excluir(controller.veiculo._id);
    $window.location.reload();
  };
}