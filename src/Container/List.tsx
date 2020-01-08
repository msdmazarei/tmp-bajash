import React ,{Component} from "react"
import {Accordion,Card} from "react-bootstrap"
import {IPlaceModel} from "../Models/PlaceModel"
import {ETranslator} from "../Constants/Translator"
import {Link} from "react-router-dom"

interface IProps {
    dataList:Array<IPlaceModel>
    ShowDetailList:any
  //  formPage():void
}
interface IState{}

export class ListSearch extends Component<IProps,IState>{
    constructor(props:IProps) {
        super(props)
    }

    openNewPage = ()=>{
       // this.props.formPage()
        
    }
 

render() {
    return (
        <Accordion defaultActiveKey="0">
             <Card>
             <Link to="/newplace">
          <Accordion.Toggle eventKey="1" onClick={this.openNewPage}>
           {ETranslator.ADD}
          </Accordion.Toggle>
          </Link>
          
        </Card>
            {this.props.dataList.length>0?
            this.props.dataList.map((item:IPlaceModel,index:number)=>{
                return(
                    <Card key={index}>
                    <Accordion.Toggle as={Card.Header} eventKey={ ` ${index}`}>
                     {item.name}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey= { ` ${index}`}>
                      <Card.Body><this.props.ShowDetailList  placeDetail={item}/></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                )
            }):""}
       
       
      </Accordion>
    )
}
}