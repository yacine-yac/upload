import error from './error.png';
import "./index.css";
function ErrorHandler({status,messageError="Error occured to upload Request"}:{status:number,messageError?:string}){
    return <>
          <div className="error main-center center">
             <img src={error} alt="Error"></img>
             <h2>{status}!, {messageError}</h2>
          </div>
    </>
}
export default ErrorHandler;