
export type uploadHook=(
    url:string,
    params?:{
        data?:FileList ,
        enabled?:boolean
    }
)=>{ 
    setData:(data: FileList) => FormUpload,
    dispatch:()=>void
    isError:boolean,
    isProgress:boolean,
    progress:number,
    total:number,
    loaded:number,
    success:boolean
}