import angular from 'angular';
import { ListaVeiculosComponent } from './lista-veiculos/lista-veiculos.component';
import { DetalhesVeiculosComponent } from './detalhes-veiculos/detalhes-veiculos.component';
import { FiltroVeiculosComponent } from './filtro-veiculos/filtro-veiculos.component';
import { EditorVeiculosComponent } from './editor-veiculos/editor-veiculos.component';
import {
  VeiculosService
} from '../services';

export default angular.module('app.components', ['ngMaterial'])
.service('VeiculosService', ['$http', VeiculosService])
.component('listaVeiculos', ListaVeiculosComponent)
.component('detalhesVeiculos', DetalhesVeiculosComponent)
.component('filtroVeiculos', FiltroVeiculosComponent)
.component('editorVeiculos', EditorVeiculosComponent)
.name;
