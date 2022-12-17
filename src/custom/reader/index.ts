import {useState,useEffect,useCallback} from 'react';
import ReactDOM from 'react-dom/client';
import Peace from "../../components/peace";
class Reader{
    private reader:FileReader;
    public result:any;
    constructor(){
        this.reader =new FileReader();
        this.result=null;
        
    } 
    readFile(file:File){ 
         this.reader.readAsDataURL(file);
         return this; 
    }
    getProgress(callback :({total,current}:{total:number,current:number})=>void){
        this.reader.onprogress=(e:ProgressEvent)=>{
            // if(!e.lengthComputable){
             if(e.lengthComputable){ 
                  console.log('is progress...',e.loaded,e.total);
                  callback({total: e.total,current:e.loaded});
             } 
             
            // }
            
//   this.reader.des 
            // 
        }
    }
    getResult(){
         this.reader.onload=(e)=>{
            this.result=this.reader.result;
             
        } 
    }
}
export function useListReaders({onLoad}:{onLoad?:()=>void}){ 
    const [element,setl]=useState<null | HTMLInputElement>(null);
    const [progress,setProgress]=useState<{current:number,total:number}>({current:0,total:0});
    // const [global,setGlobal]=useState({file})
    // 
    // read(){
    //     Object.values(this.filesElement?.files ?? {}).forEach(file => {
    //              this.files.push(new Reader(file));
    //     });
    //    console.log( this.files);
    // }
    // return Object.values(element?.files ?? {}).map(x=>{
    //           return x;
    // });
    // useEffect(()=>{console.log()},[element]);
    const setElement=(el:HTMLInputElement)=>{
        setl(el); 
    }
   const loading =useCallback(()=>{
    const Reading=  new Reader();
    element?.files &&  Reading.readFile(element?.files[0]).getProgress(({total,current})=>{
                // console.log(total,"eeee",current);
                setProgress({total,current});
    });
   },[]);
    // const loading=useCallback(()=>{
    //     const Reading=  new Reader();
    //     element?.files &&  Reading.readFile(element?.files[0]).getProgress(({total,current})=>{
    //         // console.log(total,"eeee",current);
    //         setProgress({total,current});
    //     });
    //     // console.log("====",Reading.result);
    //     //   onLoad();
    // },[]);
    // element && loading();
    
    /** return  */
    return {
        setElement,
        element,
        files: element?.files ?? null, 
        progress
    };
    
}
export default Reader;