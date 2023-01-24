import { atom } from "recoil";

export const NewsInView = atom<number>({
    key:'NewsInView',
    default:0
});