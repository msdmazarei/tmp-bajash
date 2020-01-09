
import {addCinema} from "../Actions/addCinema"
import {IPlaceModel} from "../../Models/PlaceModel"

export const mapDispatchToProps= (dispatch:any)=>{
    return{
        addCinema:(data:IPlaceModel)=>{
            
            dispatch(addCinema(data))
        
        
        },
    }
}