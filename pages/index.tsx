import Head from "next/head";
import { styled } from "../stitches.config";
import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../components/carousel";
import { Song } from "../models/song";
import { ProfilePicture } from "../models/profilePicture";

const H1 = styled('h1', {

    margin:0,
    marginTop:50,
    textAlign:'center',
    fontSize:72
});

const Section = styled('section', {

    height:'100vh',
});



export default function Home() {

    const [songs, setSongs] = useState<Song[]>([]);
    const [profilePictures, setProfilePictures] = useState<ProfilePicture[]>([]);

    async function getSongs(){

        let res = await axios.get('http://localhost:3000/api/songs')
        console.log('songs:', res.data); 
        setSongs(res.data.items);
    }

    async function getProfilePictures(){

        let res = await axios.get('http://localhost:3000/api/profilePictures');
        console.log('profilePictures:', res.data);
        setProfilePictures(res.data.items);
    }

    useEffect(() => {

        getSongs();
        getProfilePictures();
    }, []);

    return (
        <>
            <Head>
                <title>Isak Dahling Music</title>
            </Head>

            <Section>
                <H1>ISAK DAHLING MUSIC</H1>
                <Carousel songs={songs}></Carousel>
            </Section>
        </>
    )
}
