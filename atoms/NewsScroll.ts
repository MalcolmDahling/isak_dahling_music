import { atom } from "recoil";

export const NewsScroll = atom<{newsPixelsFromTop:number, sectionPixelsFromTop:number}>({
    key:'NewsScroll',
    default:{newsPixelsFromTop:0, sectionPixelsFromTop:0}
});