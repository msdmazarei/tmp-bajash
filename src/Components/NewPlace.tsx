import React , {Component} from "react"
import {Form, Col,Button} from "react-bootstrap"
import {ETranslator} from "../Constants/Translator"

export class NewPlace extends Component{
    render() {
        return(
            <div>
                <Form onSubmit={()=>{}}>
  <Form.Row>
    <Form.Group as={Col}>
      <Form.Label>{ETranslator.NAME}</Form.Label>
      <Form.Control type="text" placeholder={ETranslator.ENTER_NAME} />
    </Form.Group>

    <Form.Group as={Col}>
        <Form.Label>{ETranslator.DESCRIPTION}</Form.Label>
      <Form.Control type="TEXT" placeholder={ETranslator.DESCRIPTION} />
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