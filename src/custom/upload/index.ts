import { uploadHook } from "./typeUpload";
import {useState,useMemo} from "react";
import {initialState,state} from "./initState"; 
import FormUpload from "./form";  

/**
 * it allows to upload a set of files 
 * @param {string} url link to upload files 
 * @param {{data:FileList | undefined,enabled:boolean}} params data is files to upload and enabled it controle upload dispatch
 * @returns 
 */
const   useUpload:uploadHook= function(url,params={data:{} as FileList,enabled:false}){
    const [state,setState]=useState<state>(initialState); 
    const uploadForm=useMemo(()=>new FormUpload(url,params.data),[]); 
    
    /**
     * It allows to handle all events related to upload (loadstart,loadend,progress,error)
     */
    const dispatchEvents=()=>{
            uploadForm.xhr.onloadstart=(e)=>{ console.log('start');
                        setState({...state,isProgress:true});
            }; 
            uploadForm.xhr.upload.onprogress=(e)=>{ 
                Math.round((e.loaded/e.total)*100);
                        setState({  
                            ...state,
                            isProgress:true,
                            progress:Math.round((e.loaded/e.total*100)),
                            loaded:e.loaded,
                            total:e.total
                        });
            };
            uploadForm.xhr.addEventListener('error',(e)=>{console.log('fhfhfhdhx',uploadForm.xhr);
                        setState({
                            ...state,
                            isError:true,
                            errorMessage:"Something was wrong!",
                            isProgress:false,
                            loaded:0,
                            total:0
                        });
            });
            uploadForm.xhr.addEventListener("loadend",(e)=>{ console.log('end')
                console.log(state,uploadForm.xhr);
                uploadForm.xhr.status===200 
                    ? setState({
                            ...state,
                            isProgress:false,
                            success:true
                        })
                    : uploadForm.xhr.dispatchEvent(new Event("error"));
            }); 
    } 
    
     /* eslint-disable */
     /**
      * It allows to upload files when they are ready, and dispatch all events related to upload 
      */
    const dispatch=()=>{ 
        if(uploadForm.files?.length as number>0 ){
            uploadForm.openConnection();
              dispatchEvents();
             uploadForm.send();
        }else{ 
             setState({...state,isError:true,errorMessage:"There is no file to upload!"});
        }
    }
    /**
     * It allows to return useUpload to his initial state for to be ready to a new upload 
     */
    const initState=()=>{
           setState(initialState); 
    }
    // that means files will upload when the hook useUpload is init 
    params.enabled ===false && dispatch();
    
    return { 
                setData:(files)=>uploadForm.setData(files),
                dispatch,
                initState,
                ...state
      
    }
}
export default useUpload;