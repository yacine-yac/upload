import {useContext,memo} from 'react';
import { context } from '../../App';
type deleteElement= { 
    setBeforeDeleteState:React.Dispatch<React.SetStateAction<boolean>>
}
function DeleteElement({setBeforeDeleteState}:deleteElement){
    const {deletePeace}=useContext(context);
    return <>
        <button onClick={()=>setBeforeDeleteState(prev=>!prev)} datatype='demo' type="button">Back</button>
        <button onClick={()=>{deletePeace();setBeforeDeleteState(false) }} datatype='demo' type="button">Delete</button>
    </>
}
export default memo(DeleteElement);