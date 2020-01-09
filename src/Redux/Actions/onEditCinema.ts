import {EActionTypes} from "../ActionTypes/ActionTypes"
import {IPlaceModel} from "../../Models/PlaceModel"
export const onEditCinema = (data:IPlaceModel,index:number)=>{
    return{
        data:data,
        type:EActionTypes.EDIT_CINEMA,
        index:index
    }
}