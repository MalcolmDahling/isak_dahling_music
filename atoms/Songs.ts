import { atom } from "recoil";
import { Song } from "../models/Song";

export const Songs = atom<Song[]>({
    key:'Songs',
    default:[]
});