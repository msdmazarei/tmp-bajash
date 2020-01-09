import React , {Component} from "react"
import {Switch,Route,BrowserRouter} from "react-router-dom"
import {routes} from "../Constants/Routs"
import {CinemaList} from "./CinemaList"
import {Unavailable} from "./Unavailable"
import {NewCinema} from "./NewCinema" 
import {Header} from "./Header"
import {Container} from "react-bootstrap"

interface IProps {
}
interface IState{}




export class Main extends Component<IProps,IState>{
    constructor(props:IProps) {

        super(props)
    }
    render() {
        return(
            <div>
                <Header/>
                <Container>
                      <BrowserRouter>
    
    <Switch>
    <Route path={routes.CINEMAS} exact component={CinemaList}/>
      <Route path={routes.CINEMA} component={NewCinema}/>
      <Route path={routes.NEW_CINEMA} component={NewCinema}/>
      <Route name="unavailable" component={Unavailable}/>
      </Switch>
      </BrowserRouter>
      </Container>
            </div>
        )
    }
}