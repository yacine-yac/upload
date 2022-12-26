
export type uploadHook=(
    url:string,
    params?:{
        data?:Reader[] | null,
        enabled?:boolean
    }
)=>{
    setCredintials: React.Dispatch<React.SetStateAction<{
        data?: Reader[] | null | undefined;
        enabled?: boolean | undefined;
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