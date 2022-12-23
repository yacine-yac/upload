import React from "react";
import convertSize from "convert-size";
export class Reader {
    public reader: FileReader; 
    public result: any;
    public current:number | null=null;
    public total:number | null=null;
    public flag:boolean=false;
    public progress:number=0;
    public isProgress:boolean=false;
    public isError:boolean=false;
    public errorMessage:string | null =null;
    public name:string;
    public size:number;
    public selfDestroy:(name:string)=>void;
    constructor(file: File,destroy:(name:string)=>void) {
        this.reader = new FileReader();
        this.name=file.name;
        this.size=file.size;
        this.reader.readAsDataURL(file);
        this.selfDestroy=destroy;
    } 
    startRead(){
        this.reader.onloadstart=(e)=>{
            this.isProgress=true;  
        } 
    }
    endRead(){
            this.reader.onloadend=(e)=>{ 
                this.flag=true; 
                this.isProgress=false;
                this.result=this.reader.result;
            }
    }
    getProgress(setFiles:React.Dispatch<React.SetStateAction<Reader[]>>) {
        this.reader.onprogress = (e: ProgressEvent) => {  
            if (e.lengthComputable) {
                this.current=e.loaded;
                this.total=e.total; 
                this.progress=Math.round((e.loaded/e.total)*100);
                setFiles(prev=>[...prev]); 
            } 
        };
    }
    getResult() {
        this.reader.onloadend = (e) => { 
            this.result = this.reader.result;
        };
    }
    checkError(){
        this.reader.onerror=(e)=>{
            this.isError=true;
            this.flag=false;
            this.isProgress=false;
            this.progress=0;
            this.errorMessage="Error occurred reading file";
            console.log("eeror",e);
        }
    }
    destroy(){
        this.selfDestroy(this.name);
    }
}
