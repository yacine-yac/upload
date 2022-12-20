
function PeacElement({img,name,size}:{img:string,name:string,size:number}): JSX.Element{
    return <>
                <img src={img} />
                <div className="center-v">
                            <h2>{name}</h2>
                            <span>{size}</span>
                </div>
                <button type="button" role="delete" className="dlt_file"></button> 
    </>
}
export default PeacElement;