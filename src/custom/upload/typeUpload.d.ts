
export type uploadHook=(
    url:string,
    params:{
        data?:File,
        enabled?:boolean
    }
)=>{
    setCredintials: React.Dispatch<React.SetStateAction<{
        url: string;
        data: File | undefined;
    }>>,
    dispatch:()=>void
    isError:boolean,
    isProgress:boolean,
    progress:number,
    total:number,
    loaded:number,
    success:boolean
}