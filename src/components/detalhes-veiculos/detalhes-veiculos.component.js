import template from './detalhes-veiculos.component.html';
import controller from './detalhes-veiculos.controller';
import './detalhes-veiculos.component.scss';

export const DetalhesVeiculosComponent = {
  bindings: {
    veiculo: '=',
    exibir: '='
  },
  template,
  controller
};
