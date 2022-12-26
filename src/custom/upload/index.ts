import { uploadHook } from "./typeUpload";
import {useState} from "react";
import {initState,state} from "./initState"; 

const  useUpload:uploadHook=function(url,params={data:null,enabled:false}){
    const [{url:urlState,data,enabled},setCredintials]=useState({url,...params});
    const [state,setState]=useState<state>(initState);
    const callServer=()=>{ 
      const xhr=new XMLHttpRequest();console.log(xhr);
      xhr.open("POST",urlState);
      xhr.addEventListener("loadstart",(e)=>{ 
                setState({...state,isProgress:true});
      });
      xhr.upload.addEventListener('progress',(e)=>{
                setState({  
                    ...state,
                    progress: Math.round(e.loaded/e.total)*100,
                    loaded:e.loaded,
                    total:e.total
                });
      });
      xhr.addEventListener('error',(e)=>{console.log('fhfhfhdhx')
                setState({...state,isError:true});
      });
      xhr.addEventListener("loadend",(e)=>{console.log(e);
                setState({
                    ...state,
                    isProgress:false,
                    success:true
                });
      });
      data ?xhr.send(): setState({...state,isError:true});
    }
    enabled ===false &&callServer();
    const dispatch=()=>callServer();
    return {
        setCredintials,
        dispatch,
        ...state
    }
}
export default useUpload;