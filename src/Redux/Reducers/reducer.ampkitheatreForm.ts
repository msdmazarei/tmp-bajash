import {IAnAmphitheatreModel} from "../../Models/AmpheatreModel"
import {EActionTypes} from "../ActionTypes/ActionTypes"

const defaultStateEdit:IAnAmphitheatreModel = {
    name: "",
    cinema:"",
    floor:0,
    chair:0,
    index: 0
}

export const reducerAmphitheatreForm = (state:IAnAmphitheatreModel = defaultStateEdit , action:any) =>{
    switch(action.type){
         case EActionTypes.AMPHITHEATRE_FORM:
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