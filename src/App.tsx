import {useState,createRef, useEffect, ChangeEvent} from "react";
import reactDom from "react-dom";
import { useFetcher } from "react-router-dom"; 
import './App.css';
import ButtonsArea from './components/ButtonsArea';
import ErrorHandler from './components/Error';
import Peace from './components/peace';
import Progress from './components/progress';
import Welcom from './components/welcom';
import Reader,{useListReaders} from "./custom/reader";
function App() {
  const [inputEnable,setInputEnable]=useState<boolean>(false);
  const [files,setFiles]=useState([]);
  const filesCollection=useListReaders({onLoad:()=>{console.log('hello')}}); 
  const handleInput=(e: ChangeEvent<HTMLInputElement>)=>{
             filesCollection.setElement(e.target);
             setInputEnable(!inputEnable);
            // const areaRelease=document.getElementById('area_release') as HTMLElement;
          // e.target?.filesCollection?
          // Object.values(e.target.files ?? {}).forEach(x=>{
          //     filesCollection.readFile(x); 
          //     console.log('edded',areaRelease);
          // });
        //  let rd= e.target.files;
        //   let rf= e.target?.files as FileList  ;
        //   // filesCollection.readFile(rf);
//  e.target?.filesCollection.forEach((element:FileReader) => {
//    console.log("eee",element);      
// });
           
          // reactDom.createPortal(<Peace img={""} name={""} extention={""} />,areaRelease);
            
          // filesCollection.readAsDataURL(e.target.filesCollection);
        }
  // useEffect(()=>{
  //   console.log("eee",filesCollection);
    
  // },[filesCollection]);
  //  {filesCollection.progress.total+"hello"+filesCollection.progress.current} 
  return  <>
  <div className="d1 main-center">
      <form method="POST" encType="multipart/form-data" > 
                <div className="area1 center">
                    <h1>Uploading System</h1> 
                    <label><input  disabled={inputEnable} onChange={handleInput} type="file" name="uploading[]" id="upload" multiple /></label>
                </div>
                {/* <Progress /> */}
                <div  className="area2 center-h">
                      {/* <div className="area21" id="area_release"> */}
                      {inputEnable ? files.map(x=><Peace img={""} name={""} extention={""} />) 
                                   :   <Welcom /> }
{/* <ErrorHandler/> */}
                      {/* <Peace img="./../../icons/close.png" name={'dedd dsdfsdv sdfsfc cxc'} extention={'dds'}   /> */}
                </div>
                {/* <ButtonsArea  />  */}
      </form>  
  </div> 
  
  </>
}

export default App;
