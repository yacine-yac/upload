import React from "react";

export class Reader {
    private reader: FileReader; 
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
    constructor(file: File) {
        this.reader = new FileReader();
        this.name=file.name;
        this.size=file.size;
        this.reader.readAsDataURL(file);
        this.getResult();
        //  this.getProgress();
        // console.log(this.result,'resuykt');
    } 
    getProgress(setFiles:React.Dispatch<React.SetStateAction<Reader[]>>) {
        this.reader.onprogress = (e: ProgressEvent) => {
           this.isProgress=true;
            // if(!e.lengthComputable){
              this.reader.dispatchEvent(new Event('error'));
            if (e.lengthComputable) {
                this.current=e.loaded;
                this.total=e.total;
                this.progress=Math.round((e.loaded/e.total)*100);
                setFiles(prev=>[...prev]); 
            }
            if(e.loaded===e.total) this.isProgress=false;
            //  
        };
    }
    getResult() {
        this.reader.onload = (e) => {
            this.flag=true;
            this.result = this.reader.result;
        };
    }
    checkError(){
        this.reader.onerror=(e)=>{
            this.isError=true;
            this.flag=false;
            this.errorMessage="Error occurred reading file";
            console.log("eeror",e);
        }
    }
}
