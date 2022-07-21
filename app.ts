import { incrementadorAction } from './contador/contador.actions';
import { contadorReducer } from './contador/contador.reducer';
import { Action, Reducer } from './ngrx-fake/ngrx';

class Store<T> {
  constructor(private reducer: Reducer<T>, private state: T) {}
  getState(): T {
    return this.state;
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(contadorReducer, 10);
console.log(store.getState());
//Disparando acciones
store.dispatch(incrementadorAction);
console.log(store.getState());
