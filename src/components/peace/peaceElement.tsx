import useCheckMedia from "./checkMedia";
type peaceElement={ 
    img:string,
    name:string,
    size:string,
    state:boolean,
    type:string,
    setBeforeDeleteState:React.Dispatch<React.SetStateAction<boolean>>
}
 
function PeacElement({img,name,size,state,type,setBeforeDeleteState}:peaceElement): JSX.Element{
    const checkMediaType=useCheckMedia(type);
    return <>
               { checkMediaType==="video" ? <video src={img} /> : <img src={img} />}
                <div className="center-v">
                            <h2>{name}</h2>
                            <span>{size}</span>
                </div>
             { state===false &&  <button type="button" onClick={()=>setBeforeDeleteState(prev=>!prev)} role="delete" className="dlt_file"></button> }
    </>
}
export default PeacElement;