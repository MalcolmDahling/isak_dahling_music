import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../components/Carousel";
import { Song } from "../models/Song";
import { ProfilePicture } from "../models/ProfilePicture";
import Splash from "../components/Splash";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "../variables/breakpoints";
import VerticalLine from "../components/VerticalLine";
import Section from "../components/Section";
import Start from "../components/Start";

export default function Home() {

    const [songs, setSongs] = useState<Song[]>([]);
    const [profilePictures, setProfilePictures] = useState<ProfilePicture[]>([]);
    const [showStart, setShowStart] = useState(true);
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

        document.body.style.overflowY = 'hidden';

        setTimeout(() => {

            document.body.style.overflowY = 'auto';
        }, 6000);

        setTimeout(() => {

            setShowStart(false);
        }, 7000);
    }, []);

    //################### set bottom={true} on last VerticalLine when done ###################
    return (
        <>
            <Head>
                <title>Isak Dahling Music</title>
            </Head>

            { showStart && <Start></Start> }

            <Section viewHeight100={true}>
                <VerticalLine textElement="h1" text="ISAK&nbsp; DAHLING&nbsp; MUSIC" top={true}></VerticalLine>
                <Splash image={breakpoint === "desktop" ? profilePictures[0]?.fields.image.fields.file.url : profilePictures[3]?.fields.image.fields.file.url}></Splash>
            </Section>

            <Section paddingTop={200}>
                <VerticalLine textElement="h2" text="RELEASES"></VerticalLine>
                <Carousel songs={songs}></Carousel>
            </Section>
        </>
    )
}
