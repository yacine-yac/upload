import "./index.css";
export default function ButtonsArea({clearAllFiles,sendFiles}:{clearAllFiles:()=>void,sendFiles:()=>void}){
    return <>
       <div className="area_send main-bottom center"> 
                  <button onClick={()=>clearAllFiles()} type="button" id="delete">Delete</button>
                  <button onClick={()=>sendFiles()} type="button" id="send">Ok</button> 
      </div>
    </>
}