import useUpload from "./src/custom/upload";
import { useListReaders } from "./src/reader";
import {uploader} from "./src/uploader"; 

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