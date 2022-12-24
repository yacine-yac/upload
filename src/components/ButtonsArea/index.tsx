import "./index.css";
export default function ButtonsArea({clearAllFiles}:{clearAllFiles:()=>void}){
    return <>
       <div className="area_send main-bottom center"> 
                  <button onClick={()=>clearAllFiles()} type="button" id="delete">Delete</button>
                  <button type="button" id="send" disabled>Ok</button> 
      </div>
    </>
}