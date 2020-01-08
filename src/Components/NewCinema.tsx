import React , {Component} from "react"
import {Form, Col,Button} from "react-bootstrap"
import {ETranslator} from "../Constants/Translator"
import {IPlaceModel } from "../Models/PlaceModel"

interface IProps{
data:IPlaceModel
}

interface IState{
name?:string,
description?:string,
address?:string
}

export class NewCinema extends Component<IProps,IState>{

constructor(props:IProps) {
    super(props)
    this.state = {
        // name : this.props.data.name,
        // description: this.props.data.description,
        // address:this.props.data.address
        
    }
}





    handleInput = (e:any)=>{
console.log(e.target)
        this.setState({name:e.target.value})
    }

    render() {
        return(
            <div>
                <Form>
  <Form.Row>
    <Form.Group as={Col}>
      <Form.Label>{ETranslator.NAME}</Form.Label>
      <Form.Control type="text" placeholder={ETranslator.ENTER_NAME} name="hh" onChange={this.handleInput} value=""/>
    </Form.Group>

    <Form.Group as={Col}>
        <Form.Label>{ETranslator.DESCRIPTION}</Form.Label>
      <Form.Control type="text" placeholder={ETranslator.DESCRIPTION} />
    </Form.Group>
  </Form.Row>

  <Form.Group>
        <Form.Label>{ETranslator.ADDRESS}</Form.Label>
    <Form.Control placeholder="..." />
  </Form.Group>

  
  <Form.Row>



   
  </Form.Row>



  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

            </div>
        )
    }
}