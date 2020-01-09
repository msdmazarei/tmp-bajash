
import {addCinema} from "../Actions/addCinema"
import {IPlaceModel} from "../../Models/PlaceModel"
import {onEditCinema} from "../Actions/onEditCinema"

export const mapDispatchToProps= (dispatch:any)=>{
    return{
        addCinema:(data:IPlaceModel)=>{
            
            dispatch(addCinema(data))
        
        
        },

        onEditCinema : (data:IPlaceModel,index:number)=>{
            dispatch(onEditCinema(data,index))
        }
    }
}