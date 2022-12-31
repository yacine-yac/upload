import useUpload from "./upload";
import { useListReaders } from "./reader";
import {uploader} from "./uploader";
import {useState} from "react";
import { uploadreturn } from "./upload/typeUpload";
const Uploader:uploader=(fireWall)=>{
    const List=useListReaders(fireWall); 
    const [upload,setUpload]=useState<null | uploadreturn>(null)
 
    return {
        ListReader:List,
        setUpload:(url:string,params)=>setUpload(useUpload(url,params)),
        upload
    }
}

export default Uploader;