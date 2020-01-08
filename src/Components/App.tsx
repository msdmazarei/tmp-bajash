import React from 'react';
import {createStore} from "redux"
import { Provider } from "react-redux";
 import {reducer} from "../Redux/Reducers/Reducer"
 import {routes} from "../Constants/Routs"
 import { BrowserRouter, Route, Switch } from 'react-router-dom'
 import {Login} from "./Login"

const App: React.FC = () => {
  let store = createStore(reducer)
 
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
<Switch>
  <Route name="admin" path={routes.LOGIN} exact component={Login}/>
  </Switch>
  </BrowserRouter>

      </Provider>
    </div>
  );
}

export {App};