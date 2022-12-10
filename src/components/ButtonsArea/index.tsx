import "./index.css";
export default function ButtonsArea(){
    return <>
       <div className="area_send main-bottom center"> 
                  <button type="button" id="delete">Delete</button>
                  <button type="button" id="send" disabled>Ok</button> 
      </div>
    </>
}