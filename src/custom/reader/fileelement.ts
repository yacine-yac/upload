import { ListReadersArgs } from "./listfiles";
/**
 * it allows to check if files respect a set of conditions 
 * @property {boolean} status it refers to checking status (true means there is a condition not satisfied , false everything is well)
 * @property {string | null} message message if condition not satisfied
*/
class  FileElement{
    private static type:string[];
    public static size:number;
    private status:boolean; 
    public message:string | null=null;
    constructor(fireWall:ListReadersArgs['fireWall']){
         this.status=false;
         FileElement.type=fireWall?.type as string[];
         FileElement.size=fireWall?.size as number;
    }
    checkSize(file:File){
        if(file.size >  FileElement.size ){
               this.status=true;
               this.message="file size is not accpeted";
        }
    }
    checkType(file:File){
          if(!FileElement.type.includes(file.type)){
               this.status=true;
               this.message="file type is not accpeted";
          }
    } 
    getStatus():boolean{
        return  this.status;
    }
}
export default FileElement;