import template from './filtro-veiculos.component.html';
import controller from './filtro-veiculos.controller';
import './filtro-veiculos.component.scss';

export const FiltroVeiculosComponent = {
  bindings: {
    filtro: '=',
    veiculo: '='
  },
  template,
  controller
};
