import { atom } from "recoil";

export const ReleasesInView = atom<boolean>({
    key:'ReleasesInView',
    default:false
});