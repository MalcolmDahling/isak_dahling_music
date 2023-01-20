import Head from "next/head";
import { useEffect, useState } from "react";
import { Song } from "../models/Song";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "../variables/breakpoints";
import VerticalLine from "../components/VerticalLine";
import Section from "../components/Section";
import Intro from "../components/Intro";
import Hero from "../components/Hero";
import Releases from "../components/Releases/Releases";
import { useRecoilState } from "recoil";
import { Songs } from "../atoms/Songs";
import axios from "axios";
import Hamburger from "../components/Hamburger";
import Menu from "../components/Menu/Menu";
import { ProfilePictures } from "../atoms/ProfilePictures";
import { SocialMedia } from "../atoms/SocialMedia";
import MusicPopup from "../components/MusicPopup/MusicPopup";
import ZoomEffect from "../components/ZoomEffect";

export default function Home() {

    const [songs, setSongs] = useRecoilState(Songs);
    const [profilePictures, setProfilePictures] = useRecoilState(ProfilePictures);
    const [socialMedia, setSocialMedia] = useRecoilState(SocialMedia);
    const [backgroundImages, setBackgroundImages] = useState();

    const [showIntro, setShowIntro] = useState(true);
    const {breakpoint} = useBreakpoint(BREAKPOINTS, 'desktop');

    async function getSongs(){

        let res = await axios.get('api/getSongs');
        console.log('songs:', res.data);

        let sortedArr = res.data.items.sort((a:Song, b:Song) => {

            return new Date(b.fields.releaseDate).getTime() - new Date(a.fields.releaseDate).getTime();
        });

        setSongs(sortedArr);
    }

    async function getProfilePictures(){

        let res = await axios.get('api/getProfilePictures');
        console.log('profilePictures:', res.data);
        setProfilePictures(res.data.items);
    }

    async function getBackgroundImages(){

        let res = await axios.get('api/getBackgroundImages');
        console.log('backgroundImages:', res.data.items);
        setBackgroundImages(res.data.items);
    }

    async function getSocialMedia(){

        let res = await axios.get('api/getSocialMedia');
        console.log('socialMedia', res.data.items);
        setSocialMedia(res.data.items);
    }

    useEffect(() => {

        getSongs();
        getProfilePictures();
        getBackgroundImages();
        getSocialMedia();

        setTimeout(() => {

            setShowIntro(false);
        }, 7500);
    }, []);

    

    //################### set bottom={true} on last VerticalLine when done ###################
    return (
        <>
            <Head>
                <title>Isak Dahling Music</title>
            </Head>

            {/* { showIntro && <Intro></Intro> } */}

            <Hamburger></Hamburger>
            <Menu></Menu>
            <MusicPopup breakpoint={breakpoint}></MusicPopup>

            <Section viewHeight100={true} overflowXHidden={true} backgroundColor="black">
                <VerticalLine text="ISAK&nbsp; DAHLING&nbsp; MUSIC" top={true} breakpoint={breakpoint}></VerticalLine>
                <Hero image={breakpoint === "desktop" ? profilePictures[2]?.fields.image.fields.file.url : profilePictures[1]?.fields.image.fields.file.url}></Hero>
            </Section>

            {/* <Section paddingTop={200}>
                <VerticalLine text="RELEASES"></VerticalLine>
                <Carousel songs={props.songs}></Carousel>
            </Section> */}


            <Section backgroundColor="white" checkPixelsFromTop={true}>
                <VerticalLine text="RELEASES" mixBlendModeDifference={true} breakpoint={breakpoint}></VerticalLine>
                <ZoomEffect></ZoomEffect>
                <Releases></Releases>
            </Section>
        </>
    );
}
