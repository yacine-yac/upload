import {useState,createRef, useEffect, ChangeEvent} from "react";
import reactDom from "react-dom";
import { useFetcher } from "react-router-dom"; 
import './App.css';
import ButtonsArea from './components/ButtonsArea';
import ErrorHandler from './components/Error';
import Peace from './components/peace';
import Progress from './components/progress';
import Welcom from './components/welcom'; 
import ProgressPeace from './components/peace/progressPeace';
import PeaceError from './components/peace/errorPeace';
import PeaceReload from './components/peace/PeaceReload'; 
import { useListReaders } from "./custom/reader";
import {fireWall} from "./custom/reader/config";
function App() {
  // const [inputEnable,setInputEnable]=useState<boolean>(false);
  // const [files,setFiles]=useState([]);
 
  const filesCollection= useListReaders(fireWall);   
  const handleInput=(e: ChangeEvent<HTMLInputElement>)=>{
            filesCollection.setElement(e.target);
        }
  useEffect(()=>{
    // console.log("final ",filesCollection);
    // filesCollection.loading(); 
  },[filesCollection.element]);
  //   
  return  <>
  <div className="d1 main-center">
      <form method="POST" encType="multipart/form-data" > 
                <div className="area1 center"> 
                    <h1>Uploading System</h1> 
                    <label><input disabled={Boolean(filesCollection.files.length)}  onChange={handleInput} type="file" name="uploading[]" id="upload" multiple /></label>
                </div>
                {/* <Progress /> */}
                <div  className="area2 center-h">
                      {/* <div className="area21" id="area_release"> */}
                      {   filesCollection.files.length>0   && filesCollection.files.map((x,y)=>{
                              return   x.flag ? <Peace key={y} img={x.result} name={x.name} size={x.size}  />
                                : x.isProgress ? <ProgressPeace key={y} img={x.result} fraction={x.progress} />
                                :x.isError ?  <PeaceReload key={y} name={x.name} size={String(x.size)} /> :null; 
                            })}
{/* <ErrorHandler/> */} 
                      {filesCollection.rejected.length>0 && filesCollection.rejected.map((x,y)=><PeaceError key={y} name={x.name} messageError={x.message}  />)}
                      {filesCollection.element===null &&   <Welcom />}
                        
 
                </div>
                {/* <ButtonsArea  />  */}
      </form>  
  </div> 
  
  </>
}

export default App;
