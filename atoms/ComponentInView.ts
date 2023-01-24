import { atom } from "recoil";

interface componentInView{
    releases:boolean;
    news:boolean;
}

export const ComponentInView = atom<componentInView>({
    key:'InView',
    default:{
        releases:false,
        news:false
    }
});