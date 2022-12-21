import "./index.css";
import DeleteElement from "./DeleteElement";
import PeacElement from "./peaceElement";
export default function Peace({img,name,size}:{img:string,name:string,size:number}){
    return <>
    <div className="peace">
       {/*  <div className="show_p"> </div>file="${name}" type="${type}" */}
                <DeleteElement />
                {/* <PeacElement img={img} name={name} size={size} /> */}
        
    </div> 
    </>
}