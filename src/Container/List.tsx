import React ,{Component} from "react"
import {Accordion,Card} from "react-bootstrap"
import {IPlaceModel} from "../Models/PlaceModel"
import {ETranslator} from "../Constants/Translator"
import {Link} from "react-router-dom"

interface IProps {
    dataList:Array<IPlaceModel>,
    route : string
   
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
             <Link to={`${this.props.route}/newcinema`}>
          <Accordion.Toggle eventKey="1">
           {ETranslator.ADD}
          </Accordion.Toggle>
          </Link>
          
        </Card>
            {this.props.dataList.length>0?
            this.props.dataList.map((item:IPlaceModel,index:number)=>{
                return(
                    <Card key={index}>
                         <Link to={`${this.props.route}/:${item.name}`}>
                    <Accordion.Toggle as={Card.Header} eventKey={ ` ${index}`}>
                     {item.name}
                    </Accordion.Toggle>
                    </Link>
                    {/* <Accordion.Collapse eventKey= { ` ${index}`}>
                      <Card.Body>hello</Card.Body>
                    </Accordion.Collapse> */}
                  </Card>
                )
            }):""}
       
       
      </Accordion>
    )
}
}