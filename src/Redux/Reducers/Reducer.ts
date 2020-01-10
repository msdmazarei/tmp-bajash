import { combineReducers } from 'redux'
import {reducerAddCinema,reducerEditCinema} from "./reducer.addCinema"
export const reducer:any = combineReducers({
    reducerAddCinema,
    reducerEditCinema})