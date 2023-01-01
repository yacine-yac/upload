import "./index.css";
type buttonsarea={
  clearAllFiles:()=>void,
  sendFiles:()=>void,
  state:boolean
}
/** step value allow to make difference of style buttons  */
export default function ButtonsArea({clearAllFiles,sendFiles,state}:buttonsarea){
   
    return <>
       <div className="area_send main-bottom center"> 
               {  state 
                       ? <button onClick={()=>clearAllFiles()} step-value="false" type="button" id="delete"></button>
                     :
                      <>
                        <button onClick={()=>clearAllFiles()} step-value="true" type="button" id="delete">Delete</button>
                        <button onClick={()=>sendFiles()} step-value="true" type="button" id="send">Ok</button> 
                      </>
     
               }
      </div>
    </>
}