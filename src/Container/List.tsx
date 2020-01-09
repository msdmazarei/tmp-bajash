import React ,{Component} from "react"
import {Accordion,Card,Table, Button} from "react-bootstrap"
import {IPlaceModel} from "../Models/PlaceModel"
import {ETranslator} from "../Constants/Translator"
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import {mapDispatchToProps} from "../Redux/MapDispatchToProps/MapDispatchToProps"
import {mapStateToProps} from "../Redux/MapStateToProps/MapStateToProps"
import { withRouter, RouteComponentProps } from "react-router-dom";
import {IstateEditCinema} from "../Models/CinemaModel"


interface IProps extends RouteComponentProps<any> {
  onEditCinema(data:IstateEditCinema):void,
      dataList:Array<IPlaceModel>,
     route : string
  
  }
  

// interface IProps {
// //   cinema:IPlaceModel
// // addCinema(data:IPlaceModel):void
// //   onEditCinema(data:IPlaceModel):void,
//     dataList:Array<IPlaceModel>,
//     route : string
   
// }
interface IState{}

 class ListSearch1 extends Component<IProps,IState>{
    constructor(props:IProps) {
        super(props)
    }

    addCinema = ()=>{
      let newCinema:IstateEditCinema = {
        name:"",
        description:"",
        address:"",
        index:-1
        

      }
      this.props.onEditCinema(newCinema)
this.props.history.replace(`${this.props.route}/newcinema` )
        
    }
    handleEdit = (cinema:IPlaceModel,index:number) => {
    let newData = {
      name:cinema.name,
        description:cinema.description,
        address:cinema.address,
        index:index
    }
this.props.onEditCinema(newData)
this.props.history.replace(`${this.props.route}/${cinema.name}` )
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
   
      <td colSpan={4}>
        <Button onClick={this.addCinema}  variant="primary" size="lg" block> {ETranslator.ADD}</Button>
          {/* <Link to={`${this.props.route}/newcinema`}> */}
            
              {/* </Link> */}
               </td>
     
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
                    <td> 
                <Button variant="outline-info" onClick={()=>this.handleEdit(item,index)}>{ETranslator.EDIT}</Button>
                       {/* <Link to={`${this.props.route}/:${item.name}`}> edit</Link> */}
                       </td>
                   
                
                  </tr>
                )
            }):""}
 
  </tbody>
</Table>
    )
}
}

//  const mapStateToProps = (state:IPlaceModel) =>{
//   return{cinemas:state}
// }

export const ListSearch = connect(mapStateToProps,mapDispatchToProps)(withRouter(ListSearch1))