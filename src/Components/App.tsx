import React from 'react';
import {createStore} from "redux"
import { Provider,connect } from "react-redux";
 import {reducer} from "../Redux/Reducers/Reducer"
 import {routes} from "../Constants/Routs"
 import { BrowserRouter, Route, Switch } from 'react-router-dom'
 import {Login} from "./Login"
 import {Unavailable} from "./Unavailable"
 import {Store,persistor} from "../Redux/Store/Store"
 import { PersistGate } from 'redux-persist/integration/react'
 import {NewPlace} from "./NewPlace" 

 import { withRouter, RouteComponentProps } from "react-router-dom";

// interface Props extends RouteComponentProps<any> {
//    /* Parent component's props*/
// }
interface IProps{}

function App(props:IProps) { 
  console.log(props)
  return (
    <div>
      <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
<Switch>
  <Route name="login" path={routes.LOGIN} exact component={Login}/>
  <Route path="/newplace" component={NewPlace}/>
  <Route name="unavailable" component={Unavailable}/>
  </Switch>
  </BrowserRouter>
</PersistGate>
      </Provider>
    </div>
  );
}

export  {App}