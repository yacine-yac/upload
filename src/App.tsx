import {useState,createRef, useEffect, ChangeEvent} from "react";
import reactDom from "react-dom";
import { useFetcher } from "react-router-dom"; 
import './App.css';
import ButtonsArea from './components/ButtonsArea';
import ErrorHandler from './components/Error';
import Peace from './components/peace';
import Progress from './components/progress';
import Welcom from './components/welcom';
import {useListReaders} from "./custom/reader";
function App() {
  // const [inputEnable,setInputEnable]=useState<boolean>(false);
  // const [files,setFiles]=useState([]);
  const filesCollection=useListReaders();console.log(filesCollection.files ); 
  const handleInput=(e: ChangeEvent<HTMLInputElement>)=>{
            filesCollection.setElement(e.target);
            //  setInputEnable(!inputEnable);
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
  useEffect(()=>{
    console.log("final ",filesCollection);
    // filesCollection.loading();
    
  },[filesCollection.element]);
  //   
  return  <>
  <div className="d1 main-center">
      <form method="POST" encType="multipart/form-data" > 
                <div className="area1 center">
                  {/* {filesCollection.progress.total+"hello"+filesCollection.progress.current} */}
                    <h1>Uploading System</h1> 
                    <label><input  disabled={Boolean(filesCollection.files.length)} onChange={handleInput} type="file" name="uploading[]" id="upload" multiple /></label>
                </div>
                {/* <Progress /> */}
                <div  className="area2 center-h">
                      {/* <div className="area21" id="area_release"> */}
                      {/* { filesCollection.files.length>0  
                                  //  ? filesCollection.files.map((x,y)=><Peace key={y} img={""} name={x.name} extention={x.size} /> )
                                   :   <Welcom /> } */}
{/* <ErrorHandler/> */}
                      {/* <Peace img="./../../icons/close.png" name={'dedd dsdfsdv sdfsfc cxc'} extention={'dds'}   /> */}
                </div>
                {/* <ButtonsArea  />  */}
      </form>  
  </div> 
  
  </>
}

export default App;
