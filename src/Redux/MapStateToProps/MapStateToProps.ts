import {IPlaceModel} from "../../Models/PlaceModel"

export const mapStateToProps = (state:IPlaceModel) =>{
    return{cinema:state}
}