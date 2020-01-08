import React , {Component} from "react"
import {ListSearch} from "../Container/List"
import {PlaceComponent} from "./PlaceComponent"
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

export class Login extends Component{
    render() {
        return(
            <div>
                <ListSearch dataList={fakeData} ShowDetailList={PlaceComponent}/>
            </div>
        )
    }
}