import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'



export const store: Store<any, AnyAction> = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);