import Head from "next/head";
import { useEffect, useState } from "react";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "../variables/breakpoints";
import VerticalLine from "../components/VerticalLine";
import Section from "../components/Section";
import Intro from "../components/Intro";
import Hero from "../components/Hero";
import Releases from "../components/Releases/Releases";
import { useRecoilState } from "recoil";
import axios from "axios";
import Hamburger from "../components/Hamburger";
import Menu from "../components/Menu/Menu";
import { ProfilePictures } from "../atoms/ProfilePictures";
import { SocialMedia } from "../atoms/SocialMedia";
import MusicPopup from "../components/MusicPopup/MusicPopup";
import ZoomEffect from "../components/ZoomEffect";
import News from "../components/News/News";

export default function Home() {

    const [profilePictures, setProfilePictures] = useRecoilState(ProfilePictures);
    const [socialMedia, setSocialMedia] = useRecoilState(SocialMedia);
    
    const [backgroundImages, setBackgroundImages] = useState();

    const [showIntro, setShowIntro] = useState(true);
    const {breakpoint} = useBreakpoint(BREAKPOINTS, 'desktop');


    async function getProfilePictures(){

        let res = await axios.get('api/getProfilePictures');
        setProfilePictures(res.data.items);
    }

    async function getBackgroundImages(){

        let res = await axios.get('api/getBackgroundImages');
        setBackgroundImages(res.data.items);
    }

    async function getSocialMedia(){

        let res = await axios.get('api/getSocialMedia');
        setSocialMedia(res.data.items);
    }

    useEffect(() => {

        window.scrollTo(0,0);

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

            <Hamburger breakpoint={breakpoint}></Hamburger>
            <Menu></Menu>
            <MusicPopup breakpoint={breakpoint}></MusicPopup>

            <Section viewHeight100={true} overflowXHidden={true} backgroundColor="black">
                <VerticalLine text="ISAK&nbsp; DAHLING&nbsp; MUSIC" top={true}></VerticalLine>
                <Hero image={breakpoint === "desktop" ? profilePictures[2]?.fields.image.fields.file.url : profilePictures[1]?.fields.image.fields.file.url}></Hero>
            </Section>

            <Section backgroundColor="white">
                <VerticalLine text="RELEASES" mixBlendModeDifference={true}></VerticalLine>
                <ZoomEffect category="releases" backgroundColor="black"></ZoomEffect>
                <Releases></Releases>
            </Section>

            <Section backgroundColor="black">
                <VerticalLine text="NEWS" mixBlendModeDifference={true}></VerticalLine>
                <ZoomEffect category="news" backgroundColor="white"></ZoomEffect>
                <News></News>
            </Section>
        </>
    );
}
