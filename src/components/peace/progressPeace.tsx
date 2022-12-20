export default function ProgressPeace({img,name,size,fraction}:{img:string,name:string,size:number,fraction:number}){
    return <>
    <div className="peace">
                <img src={img} />
                <div className="center-h">
                            <h2>{name}</h2>
                            <span>{size}</span>
                </div>
                <h2 className="pourcent main-center center">{fraction}</h2> 
    </div> 
    </>
}