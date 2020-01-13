import React, {Component} from "react"
import {Form, Col, Button, ButtonToolbar} from "react-bootstrap"
import {ETranslator} from "../../Constants/Translator"
import {IPlaceModel} from "../../Models/PlaceModel"
import {connect} from "react-redux";
import {mapDispatchToProps} from "../../Redux/MapDispatchToProps/MapDispatchToProps"
import {mapStateToProps} from "../../Redux/MapStateToProps/MapStateToProps"
<<<<<<< HEAD
import { withRouter, RouteComponentProps } from "react-router-dom";
import {routes} from "../../Constants/Routs"

=======
import {withRouter, RouteComponentProps} from "react-router-dom";
>>>>>>> a9bab8bab78bbf83ef3bcc233173dbb3260ac114

interface IProps extends RouteComponentProps<any> {
    cinema: IPlaceModel

    addCinema(data: IPlaceModel): void
}

<<<<<<< HEAD

interface IState{
name:string,
chair:number,
floor:number,
cinema:string
=======
interface IState {
    name: string,
    description: string,
    address: string
>>>>>>> a9bab8bab78bbf83ef3bcc233173dbb3260ac114
}

class Amphitheatre1 extends Component<any, IState> {

<<<<<<< HEAD
constructor(props:any) {
    super(props)
    this.state = {
         name : this.props.cinemas.reducerAmphitheatreForm.name,
        chair:this.props.cinemas.reducerAmphitheatreForm.chair,
        floor:this.props.cinemas.reducerAmphitheatreForm.floor,
        cinema:this.props.cinemas.reducerAmphitheatreForm.cinema
        
=======
    constructor(props: any) {
        super(props);
        this.state = {
            name: this.props.cinemas.reducerEditCinema.name,
            description: this.props.cinemas.reducerEditCinema.description,
            address: this.props.cinemas.reducerEditCinema.address
        }
>>>>>>> a9bab8bab78bbf83ef3bcc233173dbb3260ac114
    }

<<<<<<< HEAD


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
=======
    handleInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let item: string = e.target.name;
        let newValue: string = e.target.value;
        switch (item) {
            case "name":
                return this.setState({name: newValue});
            case "description":
                return this.setState({description: newValue});
            case "address":
                return this.setState({address: newValue});
            default:
                return
        }
    };

    handleChange() {
        const input = this.myinp;
        // inputElement.addEventListener("change", handleFiles, false);
        if (this.myinp === null) {
            return
        }

        const sample = this.myinp.files;

        if (sample === null) {
            return
        }
        const selectedFile = sample[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            if (!e.target || !e.target.result) {
                return
            }
            const readXml: any = e.target.result;
            const parser = new DOMParser();
            const doc = parser.parseFromString(readXml, "application/xml");
            const svgToShow = new XMLSerializer().serializeToString(doc);
            // document.querySelector('.input-preview').innerHTML = svgToShow
            if (this.previewContainer) this.previewContainer.innerHTML = svgToShow;
            console.log(svgToShow);
        }
        reader.readAsText(selectedFile);
    };

    submitForm = () => {
        const {name, description, address} = this.state;
        this.props.addCinema({name: name, description: description, address: address});
        this.props.history.replace(`/cinemas`)
        // console.log("hello")
    };
    myinp: HTMLInputElement | null = null;
    previewContainer: HTMLElement | null = null;

    render() {
        return (
            // accept="image/svg+xml"
            <div className="input-container">
                <input id="fileUpload" type="file" ref={(inp) => this.myinp = inp}
                       onChange={() => this.handleChange()}/>
                <div className="input-name">name will be here</div>
                <div className="input-preview" ref={(e) => this.previewContainer = e}>
                    preview will be here
                </div>
>>>>>>> a9bab8bab78bbf83ef3bcc233173dbb3260ac114
            </div>
        )
    }
}

export const Amphitheatre = connect(mapStateToProps, mapDispatchToProps)(withRouter(Amphitheatre1));

