
import {IPlaceModel} from "../../Models/PlaceModel"
import {EActionTypes} from "../ActionTypes/ActionTypes"




export const reducerAddCinema = (state:Array<IPlaceModel> =[], action:any)=>{
    
    switch(action.type){
        case EActionTypes.ADD_CINEMA:
            console.log(state)
         
         let state2 = state


            //return   [...state, action.data]
         return [...state2, action.data]
         //{...state, cinema:action.data}
        // case EActionType.DELETE_ITEM:
        //     return [
        //         ...state.slice(0,action.index),
        //         ...state.slice(action.index+1)
        //     ]
        default:
            return state
    }
}