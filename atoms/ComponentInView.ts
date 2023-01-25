import { atom } from "recoil";

interface componentInView{
    releases:number;
    news:number;
    threshold:number[];
}

export const ComponentInView = atom<componentInView>({
    key:'InView',
    default:{
        releases:0,
        news:0,
        threshold:[]
    }
});