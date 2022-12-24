import "./index.css";
import DeleteElement from "./DeleteElement";
import PeacElement from "./peaceElement";
export default function Peace({img,name,size,state}:{img:string,name:string,size:string,state:boolean}){
    return <>
    <div state-value={String(state)} className="peace">
       {/*  <div className="show_p"> </div>file="${name}" type="${type}" */}
                {/* <DeleteElement /> */}
                <PeacElement state={state} img={img} name={name} size={size} />
        
    </div> 
    </>
}