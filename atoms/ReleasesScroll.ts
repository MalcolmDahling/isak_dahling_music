import { atom } from "recoil";

export const ReleasesScroll = atom<{releasesPixelsFromTop:number, sectionPixelsFromTop:number}>({
    key:'ReleasesScroll',
    default:{releasesPixelsFromTop:0, sectionPixelsFromTop:0}
});