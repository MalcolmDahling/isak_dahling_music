import { atom } from "recoil";

export const NewsInView = atom<{inView:boolean, topRefInView:boolean}>({
    key:'NewsInView',
    default:{
        inView:false,
        topRefInView:false
    }
});