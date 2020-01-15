import {  createStore } from 'redux';
//import { Reducer } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {reducer} from "../Reducers/Reducer"

//const reducers: ReducersMapObject<any, AnyAction> = { }

//const main_reducer = combineReducers({});

const persistConfig = {
  key: 'root',
  storage,
//  blacklist: ['reader_engine'],
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const Store = createStore(persistedReducer);
export const persistor = persistStore(Store);