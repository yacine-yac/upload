import './App.css';
import ButtonsArea from './components/ButtonsArea';
import ErrorHandler from './components/Error';
import Peace from './components/peace';
import Progress from './components/progress';
import Welcom from './components/welcom';
import ProgressPeace from './components/peace/progressPeace';
import PeaceError from './components/peace/errorPeace';
import PeaceReload from './components/peace/PeaceReload';
function App() {
 
  const handleInput=()=>{

  }
  return <>
  <div className="d1 main-center">
      <form method="POST" encType="multipart/form-data" > 
                <div className="area1 center">
                    <h1>Uploading System</h1> 
                    <label><input disabled={false} onChange={handleInput} type="file" name="uploading[]" id="upload" multiple /></label>
                </div>
                {/* <Progress /> */} 
                <div className="area2">
                      {/* <div className="area21" id="area_release"> */}
                            {/* <Welcom />  */}
{/* <ErrorHandler/> */}
                 {/* <ProgressPeace img=" "  fraction={65}  />   */}
                 <PeaceReload name={'dsfsdf fcsdf'} size={'206 mbp'} />  
                 <PeaceError name="ddddd" messageError={'An error is occurs to your file'} />
                {/* <Peace img=" " name="dsdqd" size={5}/>*/}
                <Peace state={true} img=" " name="dsdqd" size={5}/> 
                </div>
                {/* <ButtonsArea  />  */}
      </form>  
  </div> 
  
  </>;
}

export default App;
