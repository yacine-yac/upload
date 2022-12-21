import {useState,useEffect,useMemo,useCallback} from 'react'; 
import Peace from "../../components/peace";
import { Reader } from './Reader';
const initStateReaders={
    isProgress:false
}
// type file={name:string,isProgress:boolean,current:number,total:number};
export function useListReaders(){ 
    const [element,setElement]=useState<null | HTMLInputElement>(null);
    // const [progress,setProgress]=useState<{current:number,total:number}>({current:0,total:0});
    // const [state,setState]=useState(initStateReaders);
    const [files,setFiles]=useState<Reader[]>([]); 
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
    // const setElement=(el:HTMLInputElement)=>{
    //     setl(el); 
    // }
    // useMemo(()=>{
    //   files.length>0 &&  files[files.length-1].getProgress();
        
    // 
    // },[files]);
//    const loading =useCallback(()=>{ 
    // console.log('loadign',element);
    // const Reading=  new Reader(); 
    //  console.log('loading',element);
    // element?.files &&  Reading.readFile(element?.files[0]).getProgress(({total,current})=>{
                  
    //           console.log("situation",state.isProgress);
    //           setProgress({total,current});
    //         //   total===current &&  setState({...state,isProgress: false});
    // },setProgress);
//    },[element]);
//    useMemo(()=>{ 
//             if(element){
//                 setState({...state,isProgress: true}); 
//                 loading(); 
//             }
//    },[element]);
    // const checkProgress=(file:Reader)=>{
    //             // file.getProgress();
    //             setFiles([...files]);
    // }
    const take=()=>{
       

    }
    useEffect(()=>{
            element!==null &&  Object.values(element?.files ?? {}).forEach((item:File) => {
                     let Reading=new Reader(item);  
                     setFiles(prev=>{return [...prev,Reading] });
                     Reading.getProgress(setFiles);
                    //  const event =new EventTarget();
                    //  event.dispatchEvent("Error");
                    //  Reading.dispatch(event);
                     Reading.checkError(); 
              });
    },[element]);
    // files.length>0 &&  console.log("from file",files[0].progress);
    // const loading=useCallback(()=>{
    //     const Reading=  new Reader();
    //     element?.files &&  Reading.readFile(element?.files[0]).getProgress(({total,current})=>{
    //         // console.log(total,"eeee",current);
    //         setProgress({total,current});
    //     });
    //     // console.log("====",Reading.result);
    //     //   onLoad();
    // },[]); 
    /** return  */
    return {
        setElement,
        element,
        files 
        // progress,
        // loading,
        // ...state
    };
    
}
export default Reader;