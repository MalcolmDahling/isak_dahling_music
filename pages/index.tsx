import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../components/carousel";
import { Song } from "../models/song";
import { ProfilePicture } from "../models/profilePicture";
import Splash from "../components/splash";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "../variables/breakpoints";
import VerticalLine from "../components/verticalLine";
import { styled } from "../stitches.config";

const Section = styled('section', {

    position:'relative'
});

export default function Home() {

    const [songs, setSongs] = useState<Song[]>([]);
    const [profilePictures, setProfilePictures] = useState<ProfilePicture[]>([]);
    const {breakpoint} = useBreakpoint(BREAKPOINTS, 'desktop');

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
                <VerticalLine textElement="h1" text="ISAK&nbsp; DAHLING&nbsp; MUSIC" top={true}></VerticalLine>
                <Splash image={breakpoint == "desktop" ? profilePictures[1]?.fields.image.fields.file.url : profilePictures[0]?.fields.image.fields.file.url}></Splash>
            </Section>

            <Section>
                <VerticalLine textElement="h2" text="RELEASES"></VerticalLine>
                <Carousel songs={songs}></Carousel>
            </Section>
        </>
    )
}
