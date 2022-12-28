interface Iformupload{
    xhr:XMLHttpRequest,
    setData:(data:FileList)=>FormUpload,
    send:()=>void
}


class FormUpload implements Iformupload{
    private url :string
    private formdata: FormData;
    public files?: FileList;
    public xhr:XMLHttpRequest;
     constructor(url:string,files?:FileList){
        this.url=url; 
        this.formdata=new FormData();
        files && this.setData(files);
        this.xhr=new XMLHttpRequest(); 
     }
     setFiles(files:FileList){
            this.files=files;
            return this;
     }
     setData(data:FileList):FormUpload{  
                this.setFiles(data);
                Array.from(data,(x,y)=>{this.formdata.append('uploading[]',x)}); 
                return this;
     }
     send(){ 
            this.xhr.open("POST",this.url);
            this.xhr.send(this.formdata);
      }
}
export default FormUpload;