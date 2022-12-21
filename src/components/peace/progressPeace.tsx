import "./index.css";
export default function ProgressPeace({img ,fraction}:{img:string,fraction:number}){
    return <>
    <div className="peace">
                <img src={img} />
                <div className="pro_bar center-v">
                    <progress value={fraction} max="100"></progress> 
                </div>
                <h2 className="pourcent main-center center">{fraction+"%"}</h2> 
    </div> 
    </>
}