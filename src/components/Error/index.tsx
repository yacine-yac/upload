import error from './error.png';
import "./index.css";
function ErrorHandler(){
    return <>
          <div className="error main-center center">
             <img src={error} alt="Error"></img>
             <h2>404!, Request failt retry please</h2>
             <button type='button'></button>
             <button type='button'></button>
          </div>
    </>
}
export default ErrorHandler;