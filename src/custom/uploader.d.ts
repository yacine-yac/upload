import { ListReaderReturn } from "./reader/listfiles"
import { uploadParams, uploadreturn } from "./upload/typeUpload";

export type uploader=(
    fireWall?:{size?:number, type?:string[]}
)=>{
    upload:null | uploadreturn ,
    setUpload:(url:string,params?:{data?:FileList,enabled?:boolean}) =>void;
    ListReader: ListReaderReturn
}