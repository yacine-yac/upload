import {useState,useEffect,useMemo,useCallback} from 'react'; 
import { Reader } from './Reader';
import   {ListReaders, rejectedFile} from "./listfiles"; 
import FileElement from './fileelement'; 

const useListReaders:ListReaders=(fireWall)=> { 
    const [element,setElement]=useState<null | HTMLInputElement>(null);
    const [files,setFiles]=useState<Reader[]>([]); 
    const [rejected,setRejected]=useState<rejectedFile[]>([]);
    const fileElement=useMemo(()=>{ return new FileElement(fireWall)},[]);
    const value=element?.value ?? "";
    /**
     * it allows to destroy Reader object from files state which dispared on the view
     * this method we will be passed to  every Reader object, and this one will implement it 
     * @param {string} name name of file which deleted 
     */
    const destroyFileReader=useCallback((name:string)=>{ 
            setFiles(prev=>{
                prev.forEach((x,y)=>{ x.name===name &&(prev.splice(y,1))});
                return prev;
            });  
    },[files]);  
    const setFilesToRead= (file:File)=>{
        const Reading=new Reader(file,destroyFileReader);  
        Reading.startRead(); 
        Reading.getProgress(setFiles);
        Reading.getResult();  
        Reading.checkError();
        Reading.endRead(); 
        Reading.checkError();   
        setFiles(prev=>{return [...prev,Reading]});  
    }   
/* eslint-disable */
    useEffect(()=>{
            element!==null &&  Object.values(element?.files ?? {}).forEach((item:File) => {
                    console.log(item.type);
                    fireWall && (fileElement.checkSize(item),fileElement.checkType(item));
                    if(fileElement.getStatus()){
                        setRejected(prev=>{
                            return [
                                  ...prev,
                                  {file:item,name:item.name,message:fileElement.message as string}
                            ]
                        });
                        fileElement.initStatus();
                    }else{
                        setFilesToRead(item);
                    }
                  
              });
    },[element]);
    const initState=()=>{
        setElement(null);
        setFiles([]);
        setRejected([]);
    }
    return {
        setElement,
        element,
        files ,
        rejected,
        initState,
        value
    };
    
}
export {useListReaders}; 