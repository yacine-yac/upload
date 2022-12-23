
function PeacElement({img,name,size,state}:{img:string,name:string,size:number,state:boolean}): JSX.Element{
    return <>
                <img src={img} />
                <div className="center-v">
                            <h2>{name}</h2>
                            <span>{size}</span>
                </div>
             { state===false &&  <button type="button" role="delete" className="dlt_file"></button> }
    </>
}
export default PeacElement;