import { atom } from "recoil";
import { ISocialMedia } from "../models/ISocialMedia";

export const SocialMedia = atom<ISocialMedia[]>({
    key:'SocialMedia',
    default:[]
});