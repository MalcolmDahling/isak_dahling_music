import { atom } from "recoil";
import { ProfilePicture } from "../models/ProfilePicture";

export const ProfilePictures = atom<ProfilePicture[]>({
    key:'ProfilePictures',
    default:[]
});