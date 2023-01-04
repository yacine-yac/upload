import {ListReadersArgs } from "./listfiles";
export  const fireWall:ListReadersArgs['fireWall']= {
    type:[ 
        "image/jpeg","image/jpg","image/png",
        "video/mp4","video/3gpp","video/avi" 
        // "application/pdf",
        // "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        // "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        // "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ] 
}