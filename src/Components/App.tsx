import React from 'react';
import {createStore} from "redux"
import { Provider } from "react-redux";
 import {reducer} from "../Redux/Reducers/Reducer"
 import {routes} from "../Constants/Routs"
 import { BrowserRouter, Route, Switch } from 'react-router-dom'
 import {Login} from "./Login"
 import {Unavailable} from "./Unavailable"
 import {Store,persistor} from "../Redux/Store/Store"
 import { PersistGate } from 'redux-persist/integration/react'

const App: React.FC = () => {
 
  return (
    <div>
      <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
<Switch>
  <Route name="login" path={routes.LOGIN} exact component={Login}/>
  <Route name="unavailable" component={Unavailable}/>
  </Switch>
  </BrowserRouter>
</PersistGate>
      </Provider>
    </div>
  );
}

export {App};