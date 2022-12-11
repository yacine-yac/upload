import {useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Peace from "../../components/peace";
class Reader{
    private reader:FileReader;
    constructor(){
        this.reader =new FileReader();
        
        
    } 
    readFile(file:File){ 
        
         this.reader.readAsDataURL(file);
         return this;
        // Object.values(files).forEach(x=>{
        //     this.reader?.readAsDataURL(x); 
        //     // console.log('edded',areaRelease);
        // });
        // this.reader.readAsDataURL(files);console.log(this.reader);
    }
    getProgress(callback :({total,current}:{total:number,current:number})=>void){
        this.reader.onprogress=function(e:ProgressEvent){
            callback({total: e.total,current:e.loaded});
        }
    }
}
export function useListReaders({onLoad}:{onLoad?:()=>void}){ 
    const [element,setl]=useState<null | HTMLInputElement>(null);
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
    // useEffect(()=>{console.log(element)},[element]);
    const setElement=(el:HTMLInputElement)=>{
        setl(el); 
    }
    const loading=()=>{
        const Reading=  new Reader();
        element?.files &&  Reading.readFile(element?.files[0]).getProgress(({total,current})=>{console.log(total,"eeee",current)});
        //   onLoad();
    }
    element && loading();
    

    /** return  */
    return {
        setElement,
        element,
        files: element?.files ?? null, 
    };
    
}
export default Reader;