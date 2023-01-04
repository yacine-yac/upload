import { ListReaderReturn } from "./reader/listfiles"
import { uploadParams, uploadreturn } from "./custom/upload/typeUpload";

export type uploader=(
    url:string,
    fireWall?:{size?:number, type?:string[]},
    params?:{data?:FileList,enabled?:boolean}
)=>{
    upload: uploadreturn ,
    clear:()=>void,
    ListReader: ListReaderReturn
}