import  typesDictionary from "./typesDictionary.json";
type Mediatype="video" | "img";
export default function useCheckMedia(type:string): Mediatype { 
  return typesDictionary.img.includes(type) ? 'img':'video'
}