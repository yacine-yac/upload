
export type uploadHook=(
    url:string,
    params?:{
        data?:FileList ,
        enabled?:boolean
    }
)=>{
    setCredintials: React.Dispatch<React.SetStateAction<{
        data?: FileList;
        enabled?: boolean;
        url: string;
    }>>,
    dispatch:()=>void
    isError:boolean,
    isProgress:boolean,
    progress:number,
    total:number,
    loaded:number,
    success:boolean
}