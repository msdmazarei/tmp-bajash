import {ISalonModel} from "./svgPlanModel"

export interface IApheatreModel {
    name:string,
    cinema :string,
    chair:number,
    floor:number,
    svgTranslate: ISalonModel
}

export interface IAnAmphitheatreModel extends IApheatreModel{
    index:number
 
}