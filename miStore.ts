import { createStore, Store } from 'redux';
import {
  dividirAction,
  incrementadorAction,
  multiplicarAction,
} from './contador/contador.actions';
import { contadorReducer } from './contador/contador.reducer';
const store: Store = createStore(contadorReducer);
store.subscribe(() => {
  console.log(`Cambio state: ${store.getState()}`);
});
store.dispatch(incrementadorAction);
store.dispatch(dividirAction);
store.dispatch(multiplicarAction);
