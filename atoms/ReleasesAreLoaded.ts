import { atom } from "recoil";

export const ReleasesAreLoaded = atom<boolean>({
    key:'ReleasesAreLoaded',
    default:false
});