import React , {Component} from "react"
import {ListSearch} from "../../Container/List"
import { withRouter, RouteComponentProps } from "react-router-dom";
import {IPlaceModel} from "../../Models/PlaceModel"
import { connect } from "react-redux";
import {mapDispatchToProps} from "../../Redux/MapDispatchToProps/MapDispatchToProps"
import {mapStateToProps} from "../../Redux/MapStateToProps/MapStateToProps"
import {IstateEditCinema} from "../../Models/CinemaModel"
import {routes} from "../../Constants/Routs"


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

    addCinema = (history:any)=>{
        let newCinema:IstateEditCinema = {
          name:"",
          description:"",
          address:"",
          index:-1
          
  
        }
        this.props.onEditCinema(newCinema)
  history.replace(routes.NEW_CINEMA )
          
      }

      handleEdit = (cinema:IPlaceModel,index:number) => {
        let newData = {
          name:cinema.name,
            description:cinema.description,
            address:cinema.address,
            index:index
        }
    this.props.onEditCinema(newData)
    this.props.history.replace(`cinemas/:${cinema.name}` )
        }

    render() {
        let thisList = this.props.cinemas.reducerAddCinema
        return(
            <div>
                <ListSearch
                addItem = {this.addCinema}
                editItem = {this.handleEdit}
                 dataList={thisList} route="cinemas"/>
            </div>
        )
    }
}


export const CinemaList =  connect(mapStateToProps,mapDispatchToProps)(withRouter(CinemaList1))