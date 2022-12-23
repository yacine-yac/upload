import {useState} from 'react';
import "./index.css";
import DeleteElement from "./DeleteElement";
import PeacElement from "./peaceElement"; 

type peace = {img:string,name:string,size:number,state:boolean}

export default function Peace({img,name,size,state}:peace){
    const [beforeDeleteState ,setBeforeDeleteState]=useState<boolean>(false);
    
    return <>
            <div state-value={String(state)} className="peace">
            {/*  <div className="show_p"> </div>file="${name}" type="${type}" */}
            {beforeDeleteState ? <DeleteElement setBeforeDeleteState={setBeforeDeleteState}  /> 
                               : <PeacElement state={state} img={img} name={name} size={size} setBeforeDeleteState={setBeforeDeleteState} />
            }
            </div> 
    </>
}