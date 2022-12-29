import { uploadHook } from "./typeUpload";
import {useState,useMemo} from "react";
import {initState,state} from "./initState"; 
import FormUpload from "./form"; 

/**
 * it allows to upload a set of files 
 * @param {string} url link to upload files 
 * @param {{data:FileList | undefined,enabled:boolean}} params data is files to upload and enabled it controle upload dispatch
 * @returns 
 */
const   useUpload:uploadHook= function(url,params={data:{} as FileList,enabled:false}){
    const [state,setState]=useState<state>(initState); 
    const uploadForm=useMemo(()=>new FormUpload(url,params.data),[]); 
    
    /**
     * It allows to handle all events related to upload (loadstart,loadend,progress,error)
     */
    const dispatchEvents=()=>{  
            uploadForm.xhr.addEventListener("loadstart",(e)=>{ 
                        setState({...state,isProgress:true});
            });
            uploadForm.xhr.upload.addEventListener('progress',(e)=>{
                        setState({  
                            ...state,
                            progress: Math.round(e.loaded/e.total)*100,
                            loaded:e.loaded,
                            total:e.total
                        });
            });
            uploadForm.xhr.addEventListener('error',(e)=>{console.log('fhfhfhdhx')
                        setState({...state,isError:true});
            });
            uploadForm.xhr.addEventListener("loadend",(e)=>{//console.log(e);
                        setState({
                            ...state,
                            isProgress:false,
                            success:true
                        });
            }); 
    } 
    
     /* eslint-disable */
     /**
      * It allows to upload files when they are ready, and dispatch all events related to upload 
      */
    const dispatch=()=>{ 
        if(uploadForm.files?.length as number>0 ){
             uploadForm.send();
             dispatchEvents();
        }else{ 
             setState({...state,isError:true,errorMessage:"There is no file to upload!"});
        }
    }
    // that means files will upload when the hook useUpload is init 
    params.enabled ===false && dispatch();
   
    return { 
        setData:(files)=>uploadForm.setData(files),
        dispatch,
        ...state
    }
}
export default useUpload;