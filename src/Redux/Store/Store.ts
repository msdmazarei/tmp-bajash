import { combineReducers, createStore } from 'redux';
import { Reducer } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//const reducers: ReducersMapObject<any, AnyAction> = { }

const main_reducer = combineReducers({});

const persistConfig = {
  key: 'root',
  storage,
//  blacklist: ['reader_engine'],
}

const persistedReducer = persistReducer(persistConfig, main_reducer)

export const Store = createStore(persistedReducer);
export const persistor = persistStore(Store);