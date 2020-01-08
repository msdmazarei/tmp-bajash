import React  from 'react';
import ReactDOM from 'react-dom';
import './App.css';
 import {App} from './Components/App';
const MyApp = React.lazy(()=>import("./MyApp"))
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(   
<App/>, document.getElementById('root'));
