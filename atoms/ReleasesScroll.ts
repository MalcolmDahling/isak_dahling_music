import { atom } from "recoil";

export const ReleasesScroll = atom<{pixelsFromTop:number, height:number}>({
    key:'ReleasesScroll',
    default:{pixelsFromTop:0, height:0}
});