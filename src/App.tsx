import './App.css';
import ButtonsArea from './components/ButtonsArea';
import Welcom from './components/welcom';
function App() {
  return  <>
  <div className="d1 main-center">
      <form method="POST" encType="multipart/form-data" > 
                <div className="area1 center">
                    <h1>Uploading System</h1> 
                    <label><input type="file" name="uploading[]" id="upload" multiple /></label>
                </div>
                <div className="area2">
                      {/* <div className="area21" id="area_release"> */}
                            <Welcom /> 
                </div>
                <ButtonsArea  /> 
      </form>  
  </div> 
  
  </>
}

export default App;
