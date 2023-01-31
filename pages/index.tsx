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
import Wrapper from "../components/Wrapper";
import StickyText from "../components/StickyText";
import Contact from "../components/Contact/Contact";
import AboutAndFooter from "../components/AboutAndFooter/AboutAndFooter";
import { ToggleScrolling } from "../atoms/ToggleScrolling";
import AboutAnimation from "../components/AboutAnimation/AboutAnimation";

export default function Home() {

    const [profilePictures, setProfilePictures] = useRecoilState(ProfilePictures);
    const [socialMedia, setSocialMedia] = useRecoilState(SocialMedia);
    const [toggleScrolling, setToggleScrolling] = useRecoilState(ToggleScrolling);

    const [showIntro, setShowIntro] = useState(true);
    const {breakpoint} = useBreakpoint(BREAKPOINTS, 'desktop');


    async function getProfilePictures(){

        let res = await axios.get('api/getProfilePictures');
        setProfilePictures(res.data.items);
    }

    async function getSocialMedia(){

        let res = await axios.get('api/getSocialMedia');
        setSocialMedia(res.data.items);
    }

    useEffect(() => {

        getProfilePictures();
        getSocialMedia();

        setTimeout(() => {

            setShowIntro(false);
        }, 7500);
    }, []);

    useEffect(() => {

        if(showIntro){

            document.body.style.overflow = 'hidden';

            setTimeout(() => {

                //enable scroll slightly before intro is finished.
                setToggleScrolling(true);
                document.body.style.overflow = 'auto';
            }, 7000);
        }

        else{
            
            if(toggleScrolling){
                document.body.style.overflow = 'auto';
            }
            else{
                document.body.style.overflow = 'hidden';
            }
        }

    }, [toggleScrolling]);

    return (
        <>
            <Head>
                <title>Isak Dahling Music</title>
            </Head>

            { showIntro && <Intro></Intro> }

            <Hamburger breakpoint={breakpoint}></Hamburger>
            <Menu></Menu>
            <MusicPopup breakpoint={breakpoint}></MusicPopup>
            <Contact></Contact>

            <Section viewHeight100={true} overflowXHidden={true} backgroundColor="black">
                <VerticalLine top={true}></VerticalLine>
                <StickyText text="ISAK&nbsp; DAHLING&nbsp; MUSIC"></StickyText>
                <Hero image={breakpoint === "desktop" ? profilePictures[3]?.fields.image.fields.file.url : profilePictures[2]?.fields.image.fields.file.url}></Hero>
            </Section>

            <Wrapper>
                <VerticalLine mixBlendModeDifference={true} bottom={true}></VerticalLine>

                <Section backgroundColor="white">
                    <ZoomEffect category="releases" backgroundColor="black"></ZoomEffect>
                    <Releases></Releases>
                </Section>

                <Section backgroundColor="black">
                    <ZoomEffect category="news" backgroundColor="white"></ZoomEffect>
                    <News></News>
                </Section>

                <Section backgroundColor="white" minViewHeight100={true}>
                    <AboutAnimation></AboutAnimation>
                    <AboutAndFooter></AboutAndFooter>
                </Section>
            </Wrapper>
        </>
    );
}
