import React , {Component} from "react"
import {Form, Col,Button,ButtonToolbar} from "react-bootstrap"
import {ETranslator} from "../Constants/Translator"
import {IPlaceModel } from "../Models/PlaceModel"
import { connect } from "react-redux";
import {mapDispatchToProps} from "../Redux/MapDispatchToProps/MapDispatchToProps"
import {mapStateToProps} from "../Redux/MapStateToProps/MapStateToProps"
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

class NewCinema1 extends Component<any,IState>{

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

    newButton = () =>{
      return (
        <ButtonToolbar>
<Button 
        onClick={this.submitForm}
       variant="outline-primary"   
      >
         {ETranslator.SAVE}
       </Button>
      <Button onClick={this.handleCancel} variant="outline-secondary">{ETranslator.CANCEL}</Button>
      
      </ButtonToolbar>
        
      )
    }

    handleCancel = ()=>{
      this.props.history.replace(`/cinemas` )
    }

    editButton = () =>{
      return (
        <ButtonToolbar>
  <Button variant="outline-primary">{ETranslator.SAVE}</Button>
  <Button variant="outline-danger">{ETranslator.DELETE}</Button>
  <Button variant="outline-secondary" onClick={this.handleCancel}>{ETranslator.CANCEL}</Button>

</ButtonToolbar>
      )
    }


    render() {
     // localStorage.removeItem("*")
     console.log(this.props.match.params.id)
        return(
            <div>
                <Form>
  <Form.Row>
    <Form.Group as={Col}>
      <Form.Label>{ETranslator.NAME}</Form.Label>
      <Form.Control
       type="text" 
       placeholder={ETranslator.ENTER_NAME} 
       name="name" 
       value={this.state.name}
       onChange={this.handleInput} 
      />
    </Form.Group>

    <Form.Group as={Col}>
        <Form.Label>{ETranslator.DESCRIPTION}</Form.Label>
      <Form.Control 
      type="text" 
      name="description"
      value = {this.state.description}
      onChange={this.handleInput} 
      placeholder={ETranslator.DESCRIPTION}
       />
    </Form.Group>
  </Form.Row>

  <Form.Group>
        <Form.Label>{ETranslator.ADDRESS}</Form.Label>
    <Form.Control 
    type="text" 
    name="address"
    value = {this.state.address}
    onChange={this.handleInput} 
    placeholder="..." />
  </Form.Group>

  
  <Form.Row>   
  </Form.Row>
  {this.props.match.params.id ==="newcinema"?this.newButton():this.editButton()}

</Form>

            </div>
        )
    }
}

export const NewCinema =  connect(mapStateToProps,mapDispatchToProps)(withRouter(NewCinema1))