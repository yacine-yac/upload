import { ListReaderReturn, ListReaders } from "../reader/listfiles"
import {state} from "./initState";

export type uploadParams={
    url:string,
    params?:{
               data ?:FileList,
               enabled?:boolean
             }
} 
export type uploadreturn={
    setData:(data: FileList) => FormUpload,
    dispatch:()=>void,
    initState:()=>void,
    isError:boolean,
    isProgress:boolean,
    progress:number,
    total:number,
    loaded:number,
    success:boolean,
    errorMessage:string | null
}
 
export type uploadHook=(
    url:string,
    params?:{
        data?:FileList ,
        enabled?:boolean
    } 
)=>uploadreturn