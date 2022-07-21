import { Action } from '../ngrx-fake/ngrx';

//Crear Acciones
export const incrementadorAction: Action = {
  type: 'Incrementar',
};
export const decrementadorAction: Action = {
  type: 'Decrementar',
};

export const multiplicarAction: Action = {
  type: 'Multiplicar',
  payload: 2,
};
export const dividirAction: Action = {
  type: 'Dividir',
  payload: 2,
};

export const resetAction: Action = {
  type: 'Reset',
};
