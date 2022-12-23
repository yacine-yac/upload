import { type } from "os";

type ListReaderReturn={
     setElement:React.Dispatch<React.SetStateAction<HTMLInputElement | null>>,
    element :HTMLInputElement | null,
    files : Reader[],
    rejected: rejectedFile[]
}

export type ListReadersArgs={
        fireWall?:{
            size?:number,
            type?:string[]
        }};
export type ListReaders=(
        fireWall?:{
            size?:number,
            type?:string[] 
        }
)=> ListReaderReturn;

export type rejectedFile={name:string,message:string,file:File};