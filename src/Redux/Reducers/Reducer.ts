import { combineReducers } from 'redux'
import {reducerAddCinema,reducerEditCinema} from "./reducer.addCinema"
import {reducerAmphitheatreForm} from "./reducer.ampkitheatreForm"
import {reducerAmphitheatre} from "./reducer.Amphitheatre"

export const reducer:any = combineReducers({
    reducerAddCinema,
    reducerEditCinema,
    reducerAmphitheatreForm,
    reducerAmphitheatre})