import React , {Component} from "react"
import {Form,Col,Row} from "react-bootstrap"
import {IPlaceModel} from "../Models/PlaceModel"
import {ETranslator} from "../Constants/Translator"

interface IProps {
placeDetail:IPlaceModel
}

interface IState {
    
}

export class PlaceComponent extends Component<IProps,IState>{
    constructor(props:IProps) {
        super(props)
    }
    render() {
        return(
            <div>
                <Form >
  <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      {ETranslator.NAME}
    </Form.Label>
    <Col sm="4">
      <Form.Control plaintext readOnly defaultValue={this.props.placeDetail.name} />
    </Col>
    <Form.Label column sm="2">
    {ETranslator.ADDRESS}
    </Form.Label>
    <Col sm="4">
      <Form.Control plaintext readOnly defaultValue={this.props.placeDetail.address} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    {ETranslator.DESCRIPTION}
    </Form.Label>
    <Col sm="10">
    <Form.Control plaintext readOnly defaultValue={this.props.placeDetail.description} />
    </Col>
  </Form.Group>
</Form>
            </div>
        )
    }
}