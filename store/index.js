import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from '../reducers';
import rootSaga from '../sagas';


const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  // Root
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'appReducer',
  ],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  applyMiddleware(
    sagaMiddleware,
    createLogger(),
  ),
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default store;
