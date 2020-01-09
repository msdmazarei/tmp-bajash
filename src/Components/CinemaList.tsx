import React , {Component} from "react"
import {ListSearch} from "../Container/List"
import {PlaceComponent} from "./PlaceComponent"
import { withRouter, RouteComponentProps } from "react-router-dom";
import {IPlaceModel} from "../Models/PlaceModel"
import { connect } from "react-redux";
import {mapDispatchToProps} from "../Redux/MapDispatchToProps/MapDispatchToProps"
import {mapStateToProps} from "../Redux/MapStateToProps/MapStateToProps"


interface IProps extends RouteComponentProps<any> {
    cinemas:IPlaceModel
   /* Parent component's props*/
}

interface IState {

}

 class CinemaList1 extends Component<any,IState>{
    constructor(props:any) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        let thisList = this.props.cinemas.reducerAddCinema
        return(
            <div>
                <ListSearch dataList={thisList} route="cinemas"/>
            </div>
        )
    }
}


export const CinemaList =  connect(mapStateToProps,mapDispatchToProps)(withRouter(CinemaList1))