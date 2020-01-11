import React , {Component} from "react"
import {Form, Col,Button,ButtonToolbar,DropdownButton,Dropdown} from "react-bootstrap"
import {ETranslator} from "../../Constants/Translator"
import {IPlaceModel } from "../../Models/PlaceModel"
import { connect } from "react-redux";
import {mapDispatchToProps} from "../../Redux/MapDispatchToProps/MapDispatchToProps"
import {mapStateToProps} from "../../Redux/MapStateToProps/MapStateToProps"
import { withRouter, RouteComponentProps } from "react-router-dom";
import {routes} from "../../Constants/Routs"
import {IApheatreModel} from "../../Models/AmpheatreModel"


interface IProps extends RouteComponentProps<any> {
 
cinema:IPlaceModel
//addCinema(data:IPlaceModel):void

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
      this.props.history.replace(routes.CINEMAS )

  
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

    handleCancel = ()=>{
      this.props.history.replace(routes.CINEMAS )
    }

    handleEdit = () =>{
      const {name,description,address}= this.state
      this.props.editCinema({name:name,description:description,address:address},
        this.props.cinemas.reducerEditCinema.index)
      this.props.history.replace(routes.CINEMAS )
    }

    handleDeletCinema = () => {
      const {name,description,address}= this.state
      this.props.deleteCinema({name:name,description:description,address:address},
        this.props.cinemas.reducerEditCinema.index)
      this.props.history.replace(routes.CINEMAS )
    }

    controlEmpty = () => {
      const {name,address,description} = this.state
      if (name ===""|| address ==="" || description ==="") {
        return true
      }
      return false
    }

    amphitheatreForm = () =>{

     
        let newAmphitheatre:any = {
          cinema : this.props.cinemas.reducerEditCinema.name,
          name:"",
          chair:0,
          floor:0,
          index:-1
          
  
        }
        this.props.onAmphitheatreForm(newAmphitheatre)

      this.props.history.replace(routes.NEW_AMPHITHEATRE )
    }

    editButton = () =>{
      return (
        <div>
          <Button  className="margin-button left-float" variant="primary" onClick={this.amphitheatreForm}>{ETranslator.ADD_AMPHITHEATRE}</Button>
        <ButtonToolbar>
  <Button disabled={this.controlEmpty()} className="margin-button" variant="primary" onClick={this.handleEdit}>{ETranslator.SAVE}</Button>
  <Button  className="margin-button" variant="danger" onClick={this.handleDeletCinema}>{ETranslator.DELETE}</Button>
  <Button  className="margin-button"  variant="secondary" onClick={this.handleCancel}>{ETranslator.CANCEL}</Button>
 
</ButtonToolbar>

</div>
      )
    }

    addAmphitheatre = () => {
      return (
   
   <DropdownButton id="dropdown-basic-button" title="Dropdown button">
     {this.props.cinemas.reducerAmphitheatre.map((item:IApheatreModel,index:number)=>{
    return <Dropdown.Item key={index}>{item.name}</Dropdown.Item>
     })}
</DropdownButton>
      )

    }


    render() {
    console.log(this.props.cinemas.reducerAmphitheatre.length)
        return(
            <div>
                <Form className="align-right">
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
    <Form.Group  as={Col}>
        <Form.Label>{ETranslator.ADDRESS}</Form.Label>
    <Form.Control 
    type="text" 
    name="address"
    value = {this.state.address}
    onChange={this.handleInput} 
    placeholder="..." />
  </Form.Group>


  </Form.Row>


  <Form.Group>
        <Form.Label>{ETranslator.DESCRIPTION}</Form.Label>
      <Form.Control 
      type="text" 
      name="description"
      value = {this.state.description}
      onChange={this.handleInput} 
      placeholder={ETranslator.DESCRIPTION}
       />
    </Form.Group>
  
  <Form.Row>   
     {this.props.cinemas.reducerAmphitheatre.length>0?this.addAmphitheatre():null} 
  </Form.Row> 
  {/* {this.props.cinema.reducerAmphitheatre.length>0!=="newcinema"?this.addAmphitheatre():null} */}
  <Form.Row>
  {this.props.match.params.id ==="newcinema"?this.newButton():this.editButton()}
</Form.Row>
</Form>

            </div>
        )
    }
}

export const NewCinema =  connect(mapStateToProps,mapDispatchToProps)(withRouter(NewCinema1))