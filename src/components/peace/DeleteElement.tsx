type deleteElement= {
    deletePeace:()=>void
    setBeforeDeleteState:React.Dispatch<React.SetStateAction<boolean>>
}
function DeleteElement({setBeforeDeleteState,deletePeace}:deleteElement){
    return <>
        <button onClick={()=>setBeforeDeleteState(prev=>!prev)} datatype='demo' type="button">Back</button>
        <button onClick={deletePeace} datatype='demo' type="button">Delete</button>
    </>
}
export default DeleteElement;