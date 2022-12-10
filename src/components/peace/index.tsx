import "./index.css";
import DeleteElement from "./DeleteElement";
import PeacElement from "./peaceElement";
export default function Peace({img,name,extention}:{img:string,name:string,extention:string}){
    return <>
    <div className="peace">
        {/*<div className="show_p"> </div>file="${name}" type="${type}" */}
                {/* <DeleteElement /> */}
                <PeacElement img={img} name={name} extention={extention} />
        
    </div> 
    </>
}