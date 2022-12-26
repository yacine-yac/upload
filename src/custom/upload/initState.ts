export type state={
    isError:boolean,
    isProgress:boolean,
    progress:number,
    total:number,
    loaded:number,
    success:boolean
}
export  const initState:state={
    isError:false,
    isProgress:false,
    progress:0,
    total:0,
    loaded:0,
    success:false
};