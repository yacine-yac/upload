import {useState,memo} from 'react';
import "./index.css";  
import DeleteElement from "./DeleteElement"; 
import PeacElement from "./peaceElement";  

type peace = {img:string,name:string,size:string,state:boolean,type:string}

function Peace({img,name,size,state,type}:peace){ 
    const [beforeDeleteState ,setBeforeDeleteState]=useState<boolean>(false); 
 
    return <> 
            <div state-value={String(state)} className="peace">
            {/*  <div className="show_p"> </div>file="${name}" type="${type}" */}
            {beforeDeleteState ? <DeleteElement setBeforeDeleteState={setBeforeDeleteState}  /> 
                               : <PeacElement state={state} img={img} name={name} size={size} type={type} setBeforeDeleteState={setBeforeDeleteState} />
            }
            </div>  
    </>
}
export default memo(Peace);