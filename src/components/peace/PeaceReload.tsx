import "./index.css";
import img from '../../icons/reload.png';
export default function PeaceReload({name,size}:{name:string,size:string}){
    return <>
     <div className="peace">  
                <div className="peace-reload center-v">
                            <h2>{name}</h2>
                            <span>{size}</span> 
                </div> 
                {/* reloading-event : add class to button when it is submited  */}
                <button type="button" className="main-center "  role="reload"></button> 
     </div> 
    </>
}