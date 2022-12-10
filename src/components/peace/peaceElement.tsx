
function PeacElement({img,name,extention}:{img:string,name:string,extention:string}){
    return <>
                <img src={img} />
                <div className="center-v">
                            <h2>{name}</h2>
                            <span>{extention}</span>
                </div>
                <button type="button" role="delete" className="dlt_file"></button> 
    </>
}
export default PeacElement;