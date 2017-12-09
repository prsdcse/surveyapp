import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index'

const sagaMiddleware = new createSagaMiddleware();

export default function configureStore(){
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)
    return store
}