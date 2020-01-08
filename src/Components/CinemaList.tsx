import React , {Component} from "react"
import {ListSearch} from "../Container/List"
import {PlaceComponent} from "./PlaceComponent"
import { withRouter, RouteComponentProps } from "react-router-dom";
const fakeData = [
    {
        name:"azadi",
        description:"aa",
        address:"enghelab"
    },
    {
        name:"azadi1",
        description:"aa1",
        address:"enghelab1"
    },
    {
        name:"azadi2",
        description:"aa2",
        address:"enghelab2"
    }
]

interface IProps extends RouteComponentProps<any> {
   /* Parent component's props*/
}

interface IState {

}

 class CinemaList extends Component<IProps,IState>{
    constructor(props:IProps) {
        super(props)
    }
    render() {
      
        return(
            <div>
                <ListSearch dataList={fakeData} route="cinemas"/>
            </div>
        )
    }
}

export {CinemaList}