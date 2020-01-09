import React ,{Component} from "react"
import {Accordion,Card,Table} from "react-bootstrap"
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
        <Table striped hover  className="align-right">
  <thead >
    <tr>
      <th></th>
    <th>{ETranslator.NAME}</th>
    <th colSpan={2}>{ETranslator.ADDRESS}</th>
    </tr>
  </thead>
  <tbody>
  
    <tr>
   
      <td colSpan={4}>  <Link to={`${this.props.route}/newcinema`}> {ETranslator.ADD} </Link> </td>
     
    </tr>
    
             {this.props.dataList.length>0?
            this.props.dataList.map((item:IPlaceModel,index:number)=>{
                return(
                    <tr key={index}>
            <td>{index+1}</td> 
                    <td>
                     {item.name}
                    </td>
                    <td>
                     {item.address}
                    </td>
                    <td>  <Link to={`${this.props.route}/:${item.name}`}> edit</Link></td>
                   
                
                  </tr>
                )
            }):""}
 
  </tbody>
</Table>
    )
}
}