import useUpload from "./upload";
import { useListReaders } from "./reader";
import {uploader} from "./uploader"; 

const useUploader:uploader=(url,fireWall,params)=>{
    const List=useListReaders(fireWall); 
    const uploading=useUpload(url,params); 
    const clear=()=>{
        List.initState();
        uploading.initState();
    }
    return {
        ListReader:List,
        clear, 
        upload:uploading
    }
}

export default useUploader;