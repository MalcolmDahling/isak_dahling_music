import { atom } from "recoil";

export const ToggleMusicPopup = atom<{show:boolean, title:string}>({
    key:'ToggleMusicPopup',
    default:{show:false, title:''}
});