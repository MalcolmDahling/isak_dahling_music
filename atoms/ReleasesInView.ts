import { atom } from "recoil";

export const ReleasesInView = atom<{inView:boolean, topRefInView:boolean}>({
    key:'ReleasesInView',
    default:{
        inView:false,
        topRefInView:false
    }
});