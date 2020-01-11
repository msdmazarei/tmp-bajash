import React , {Component} from "react"
import {Form, Col,Button,ButtonToolbar} from "react-bootstrap"
import {ETranslator} from "../../Constants/Translator"
import {IPlaceModel } from "../../Models/PlaceModel"
import { connect } from "react-redux";
import {mapDispatchToProps} from "../../Redux/MapDispatchToProps/MapDispatchToProps"
import {mapStateToProps} from "../../Redux/MapStateToProps/MapStateToProps"
import { withRouter, RouteComponentProps } from "react-router-dom";
import {routes} from "../../Constants/Routs"


interface IProps extends RouteComponentProps<any> {
 
cinema:IPlaceModel
addCinema(data:IPlaceModel):void

}


interface IState{
name:string,
chair:number,
floor:number,
cinema:string
}

class Amphitheatre1 extends Component<any,IState>{

constructor(props:any) {
    super(props)
    this.state = {
         name : this.props.cinemas.reducerAmphitheatreForm.name,
        chair:this.props.cinemas.reducerAmphitheatreForm.chair,
        floor:this.props.cinemas.reducerAmphitheatreForm.floor,
        cinema:this.props.cinemas.reducerAmphitheatreForm.cinema
        
    }
}





    handleInput = (e: React.ChangeEvent<HTMLSelectElement>)=>{
      let item:string = e.target.name
      let newValue:any=e.target.value
      switch(item) {
        case "name":
          return this.setState({name:newValue})
          case "floor":
            return  this.setState({floor:newValue})
            case "chair":
              return this.setState({chair:newValue})
              default: return
      }
      
    }
    submitForm = ()=>{
         const {name,floor,chair}= this.state
       this.props.addAmphitheatre({name:name,floor:floor,chair:chair})
       this.props.history.replace(`/cinemas` )

    // console.log("hello")
    }

    controlEmpty = () => {
      const {name,chair,floor} = this.state
      if (name ===""|| chair ===0 || floor ===0) {
        return true
      }
      return false
    }
    newButton = () =>{
      return (
        <ButtonToolbar>
<Button 
 disabled={this.controlEmpty()}
        onClick={this.submitForm}
       variant="primary"   
      >
         {ETranslator.SAVE}
       </Button>
      <Button onClick={this.handleCancel} variant="secondary">{ETranslator.CANCEL}</Button>
      
      </ButtonToolbar>
        
      )
    }

    editButton = () =>{
      return (
        <div>
        
        <ButtonToolbar>
  <Button
 //  disabled={this.controlEmpty()} 
   className="margin-button" variant="primary"
  //  onClick={this.handleEdit}
    >{ETranslator.SAVE}</Button>
  <Button  className="margin-button" variant="danger" 
 // onClick={this.handleDeletCinema}
  >{ETranslator.DELETE}</Button>
  <Button  className="margin-button"  variant="secondary" onClick={this.handleCancel}>{ETranslator.CANCEL}</Button>
 
</ButtonToolbar>

</div>
      )
    }

    handleCancel = ()=>{
      this.props.history.replace(routes.CINEMAS )
    }


    render() {
        return(
          <div>
    <h3>{ETranslator.CINEMA_NAME}: {this.props.cinemas.reducerAmphitheatreForm.cinema}</h3>
            <div className="form-box">
 
 <Form className="align-right">
  <Form.Row>
    <Form.Group as={Col}>
      <Form.Label>{ETranslator.AMPHITHEATRE_NAME}</Form.Label>
      <Form.Control
       type="text" 
       placeholder={ETranslator.ENTER_AMPHITHEATRE_NAME} 
       name="name" 
       value={this.state.name}
       onChange={this.handleInput} 
      />
    </Form.Group>
    <Form.Group  as={Col}>
        <Form.Label>{ETranslator.NUMBER_OF_FLOOR}</Form.Label>
    <Form.Control 
    type="number" 
    name="floor"
   // value = {this.state.floor}
    onChange={this.handleInput} 
    placeholder={ETranslator.ENTER_NUMBER_OF_FLOOR} />
  </Form.Group>
  <Form.Group  as={Col}>
        <Form.Label>{ETranslator.NUMBER_OF_CHAIR}</Form.Label>
    <Form.Control 
    type="number" 
    name="chair"
    //value = {this.state.chair}
    onChange={this.handleInput} 
    placeholder={ETranslator.ENTER_NUMBER_OF_CHAIR} />
  </Form.Group>

  </Form.Row>
  
  <Form.Row>
  <Form.Group  as={Col}>
        <Form.Label>{ETranslator.UPLOAD_PLAN}</Form.Label>
      <Form.Control 
      type="file" 
      name="description"
    //  value = {this.state.description}
    //  onChange={this.handleInput} 
      placeholder={ETranslator.DESCRIPTION}
       />
    </Form.Group>
    <Form.Group  as={Col}>
      <div className="prewiev-plan">
        <img src=""/>
      </div>
        {/* <Form.Label>{ETranslator.UPLOAD_PLAN}</Form.Label>
      <Form.Control 
      type="file" 
      name="description"
    //  value = {this.state.description}
    //  onChange={this.handleInput} 
      placeholder={ETranslator.DESCRIPTION}
       /> */}
    </Form.Group>
  </Form.Row>
 
   {/* {this.props.match.params.id !=="newcinema"?this.addAmphitheatre():null} */}

  { this.props.cinemas.reducerAmphitheatreForm.name ===""?this.newButton():this.editButton()} 

</Form>

            


            </div>
            </div>
        )
    }
}

export const Amphitheatre =  connect(mapStateToProps,mapDispatchToProps)(withRouter(Amphitheatre1))