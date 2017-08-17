import template from './editor-veiculos.component.html';
import controller from './editor-veiculos.controller';
import './editor-veiculos.component.scss';

export const EditorVeiculosComponent = {
  bindings: {
    veiculo: '=',
    exibir: '='
  },
  template,
  controller
};
