
import {IPlaceModel} from "../../Models/PlaceModel"
import {EActionTypes} from "../ActionTypes/ActionTypes"

interface Istate {
    cinemas:Array<IPlaceModel>,
     cinema:IPlaceModel
}

const defaultStateEdit:IPlaceModel = {
    
    
        name:"",
        description:"",
        address:""
    
    
}

export const reducerAddCinema = (state:Array<IPlaceModel> = [] , action:any)=>{
    let state2 = state

    switch(action.type){
        case EActionTypes.ADD_CINEMA:         
       
         return  [...state2,action.data]
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

export const reducerEditCinema = (state:IPlaceModel = defaultStateEdit , action:any) =>{
    switch(action.type){
         case EActionTypes.EDIT_CINEMA:
             return action.data
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