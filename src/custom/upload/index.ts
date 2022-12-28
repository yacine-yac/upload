import { uploadHook } from "./typeUpload";
import {useState} from "react";
import {initState,state} from "./initState"; 

   
const   useUpload:uploadHook=function(url,params={data:{} as FileList,enabled:false}){
    const [{url:urlState,data,enabled},setCredintials]=useState({url,...params});
    const [state,setState]=useState<state>(initState);
    const formdata=new FormData();
    const formReady:boolean=formdata.getAll('uploading[]').length >0;
    const proccessFormdata=()=>{
      if(data?.length as number >0){
                for(let i in data){console.log(data,"zzz");
                    formdata.append('uploading[]',data.item(+i) as File);
                } 
                console.log("fff",formdata.getAll("uploading[]"));
      }else{
         setState({...state,isError:true,errorMessage:"There is no file to upload!"})
      }
   
    }

    const callServer=()=>{ 
            const xhr=new XMLHttpRequest(); 
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
            xhr.send(formdata);
    }
     /* eslint-disable */
    enabled ===false && (proccessFormdata(),formReady && callServer());
    const dispatch=()=> (proccessFormdata(),formReady && callServer());
    return {
        setCredintials,
        dispatch,
        ...state
    }
}
export default useUpload;