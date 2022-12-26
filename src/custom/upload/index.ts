import { uploadHook } from "./typeUpload";
import {useState} from "react";
import {initState,state} from "./initState";
const  useUpload:uploadHook=function(url,{data,enabled=false}){
    const [credintials,setCredintials]=useState({url,data});
    const [state,setState]=useState<state>(initState);
    const callServer=()=>{ console.log('ok');
      const xhr=new XMLHttpRequest();
      xhr.open("POST",credintials.url);
      xhr.upload.addEventListener('load',()=>{});
      xhr.upload.addEventListener('error',()=>{});
      xhr.upload.addEventListener('end',()=>{});
      xhr.send(credintials.data);
    }
    enabled ===false && callServer();
    const dispatch=()=>callServer();
    return {
        setCredintials,
        dispatch,
        ...state
    }
}
export default useUpload;