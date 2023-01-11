import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil';
import Hamburger from '../components/Hamburger';
import Menu from '../components/Menu/Menu';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Song } from '../models/Song';
import { ProfilePicture } from '../models/ProfilePicture';

export default function App({ Component, pageProps }: AppProps) {

    const [songs, setSongs] = useState<Song[]>([]);
    const [profilePictures, setProfilePictures] = useState<ProfilePicture[]>([]);
    const [backgroundImages, setBackgroundImages] = useState();

    async function getSongs(){

        let res = await axios.get('api/songs');
        console.log('songs:', res.data);

        let sortedArr = res.data.items.sort((a:Song, b:Song) => {

            return new Date(b.fields.releaseDate).getTime() - new Date(a.fields.releaseDate).getTime();
        });

        setSongs(sortedArr);
    }

    async function getProfilePictures(){

        let res = await axios.get('api/profilePictures');
        console.log('profilePictures:', res.data);
        setProfilePictures(res.data.items);
    }

    async function getBackgroundImages(){

        let res = await axios.get('api/backgroundImages');
        console.log('backgroundImages:', res.data.items);
        setBackgroundImages(res.data.items);
    }

    useEffect(() => {

        getSongs();
        getProfilePictures();
        getBackgroundImages();
    }, []);

    return (
        <RecoilRoot>
            <Head>
                <meta name="description" content="Music by Isak Dahling" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Hamburger></Hamburger>
            <Menu profilePictures={profilePictures}></Menu>
            
            <Component {...pageProps} songs={songs} profilePictures={profilePictures} backgroundImages={backgroundImages}/>
        </RecoilRoot>
    );
}
