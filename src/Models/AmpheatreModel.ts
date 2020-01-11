export interface IApheatreModel {
    name:string,
    cinema :string,
    chair:number,
    floor:number
}

export interface IAnAmphitheatreModel extends IApheatreModel{
    index:number
 
}