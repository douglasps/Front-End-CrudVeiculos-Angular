import template from './lista-veiculos.component.html';
import controller from './lista-veiculos.controller';
import './lista-veiculos.component.scss';

export const ListaVeiculosComponent = {
  bindings: {
    filtro: '=',
    veiculo: '='
  },
  template,
  controller
};
