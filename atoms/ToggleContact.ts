import { atom } from "recoil";

export const ToggleContact = atom<boolean>({
    key:'ToggleContact',
    default:false
});