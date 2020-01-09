
import {addCinema} from "../Actions/addCinema"
import {IPlaceModel} from "../../Models/PlaceModel"
import {onEditCinema} from "../Actions/onEditCinema"
import {editCinema} from "../Actions/onEditCinema"
import {IstateEditCinema} from "../../Models/CinemaModel"
import {deleteCinema} from "../Actions/DeleteCinema"

export const mapDispatchToProps= (dispatch:any)=>{
    return{
        addCinema:(data:IPlaceModel)=>{
            
            dispatch(addCinema(data))
        
        
        },

        onEditCinema : (data:IstateEditCinema)=>{
            dispatch(onEditCinema(data))
        },
        editCinema :(data:IPlaceModel,index:number)=>{
            dispatch(editCinema(data,index))
        },
        deleteCinema : (data:IPlaceModel,index:number)=>{
            dispatch(deleteCinema(data,index))
        },
    }
}