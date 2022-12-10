import error from './error.png';
import "./index.css";
function ErrorHandler(){
    return <>
          <div className="error main-center">
             <img src={error} alt="Error"></img>
             <h2>404!, Request failt retry please</h2>
          </div>
    </>
}
export default ErrorHandler;