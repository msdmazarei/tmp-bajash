import React , {Component} from "react"
import {Form, Col,Button,ButtonToolbar} from "react-bootstrap"
import {ETranslator} from "../../Constants/Translator"
import {IPlaceModel } from "../../Models/PlaceModel"
import { connect } from "react-redux";
import {mapDispatchToProps} from "../../Redux/MapDispatchToProps/MapDispatchToProps"
import {mapStateToProps} from "../../Redux/MapStateToProps/MapStateToProps"
import { withRouter, RouteComponentProps } from "react-router-dom";


interface IProps extends RouteComponentProps<any> {
 
cinema:IPlaceModel
addCinema(data:IPlaceModel):void

}


interface IState{
name:string,
description:string,
address:string
}

class Amphitheatre1 extends Component<any,IState>{

constructor(props:any) {
    super(props)
    this.state = {
         name : this.props.cinemas.reducerEditCinema.name,
        description: this.props.cinemas.reducerEditCinema.description,
        address:this.props.cinemas.reducerEditCinema.address 
        
    }
}





    handleInput = (e: React.ChangeEvent<HTMLSelectElement>)=>{
      let item:string = e.target.name
      let newValue:string=e.target.value
      switch(item) {
        case "name":
          return this.setState({name:newValue})
          case "description":
            return  this.setState({description:newValue})
            case "address":
              return this.setState({address:newValue})
              default: return
      }
      
    }
    submitForm = ()=>{
        const {name,description,address}= this.state
      this.props.addCinema({name:name,description:description,address:address})
      this.props.history.replace(`/cinemas` )

    // console.log("hello")
    }





    render() {
        return(
            <div>
 
I AM AMPHITHEATRE FORM


            </div>
        )
    }
}

export const Amphitheatre =  connect(mapStateToProps,mapDispatchToProps)(withRouter(Amphitheatre1))