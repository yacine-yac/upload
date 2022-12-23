type deleteElement= {
    
    setBeforeDeleteState:React.Dispatch<React.SetStateAction<boolean>>
}
function DeleteElement({setBeforeDeleteState}:deleteElement){
    return <>
        <button onClick={()=>setBeforeDeleteState(prev=>!prev)} datatype='demo' type="button">Back</button>
        <button datatype='demo' type="button">Delete</button>
    </>
}
export default DeleteElement;