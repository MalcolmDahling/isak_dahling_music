import Head from "next/head";
import { useEffect, useState } from "react";
import { Song } from "../models/Song";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "../variables/breakpoints";
import VerticalLine from "../components/VerticalLine";
import Section from "../components/Section";
import Intro from "../components/Intro";
import Splash from "../components/Splash";
import Releases from "../components/Releases/Releases";
import { useRecoilState } from "recoil";
import { Songs } from "../atoms/Songs";
import axios from "axios";
import Hamburger from "../components/Hamburger";
import Menu from "../components/Menu/Menu";
import { ProfilePictures } from "../atoms/ProfilePictures";
import SvgBackground from "../components/SvgBackground";

export default function Home() {

    const [songs, setSongs] = useRecoilState(Songs);
    const [profilePictures, setProfilePictures] = useRecoilState(ProfilePictures);
    const [backgroundImages, setBackgroundImages] = useState();

    const [showStart, setShowStart] = useState(true);
    const {breakpoint} = useBreakpoint(BREAKPOINTS, 'desktop');

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

        setTimeout(() => {

            setShowStart(false);
        }, 5000);
    }, []);

    //################### set bottom={true} on last VerticalLine when done ###################
    return (
        <>
            <Head>
                <title>Isak Dahling Music</title>
            </Head>

            { showStart && <Intro></Intro> }

            <Hamburger></Hamburger>
            <Menu></Menu>

            <Section viewHeight100={true}>
                <VerticalLine textElement="h1" text="ISAK&nbsp; DAHLING&nbsp; MUSIC" top={true}></VerticalLine>
                <Splash image={breakpoint === "desktop" ? profilePictures[2]?.fields.image.fields.file.url : profilePictures[1]?.fields.image.fields.file.url}></Splash>
            </Section>

            {/* <Section paddingTop={200}>
                <VerticalLine textElement="h2" text="RELEASES"></VerticalLine>
                <Carousel songs={props.songs}></Carousel>
            </Section> */}

            <Section>
                <SvgBackground></SvgBackground>
                <VerticalLine textElement="h2" text="RELEASES"></VerticalLine>
                <Releases></Releases>
            </Section>
        </>
    );
}
