import React from "react";

export class Reader {
    private reader: FileReader; 
    public result: any;
    public current:number | null=null;
    public total:number | null=null;
    public progress:number=0;
    public isProgress:boolean=false;
    public name:string;
    public size:number;
    constructor(file: File) {
        this.reader = new FileReader();
        this.name=file.name;
        this.size=file.size;
        this.reader.readAsDataURL(file);
        this.result = this.reader.result; 
        //  this.getProgress();
        // console.log(this.result,'resuykt');
    } 
    getProgress(setFiles:React.Dispatch<React.SetStateAction<Reader[]>>) {
        this.reader.onprogress = (e: ProgressEvent) => {
           this.isProgress=true;
            // if(!e.lengthComputable){
            if (e.lengthComputable) {
                this.current=e.loaded;
                this.total=e.total;
                this.progress=Math.round((e.loaded/e.total)*100);
                setFiles(prev=>[...prev]);
                // console.log('is progress...',this.progress,this.isProgress);
                // callback({ total: e.total, current: e.loaded });
            }
            this.isProgress=false;
            // }
            //   this.reader.des 
            // 
        };
    }
    getResult() {
        this.reader.onload = (e) => {
            this.result = this.reader.result;

        };
    }
}
