import Head from "next/head";
import { useEffect, useState } from "react";
import { Song } from "../models/Song";
import { ProfilePicture } from "../models/ProfilePicture";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "../variables/breakpoints";
import VerticalLine from "../components/VerticalLine";
import Section from "../components/Section";
import Intro from "../components/Intro";
import Splash from "../components/Splash";
import Releases from "../components/Releases/Releases";
import { IBackgroundImage } from "../models/IBackgroundImage";
import BackgroundImage from "../components/BackgroundImage";

interface props{
    songs:Song[];
    profilePictures:ProfilePicture[];
    backgroundImages:IBackgroundImage[];
}

export default function Home(props:props) {

    const [showStart, setShowStart] = useState(true);
    const {breakpoint} = useBreakpoint(BREAKPOINTS, 'desktop');

    useEffect(() => {

        // document.body.style.overflowY = 'hidden';

        // setTimeout(() => {

        //     document.body.style.overflowY = 'auto';
        // }, 4000);

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

            <Section viewHeight100={true}>
                <VerticalLine textElement="h1" text="ISAK&nbsp; DAHLING&nbsp; MUSIC" top={true}></VerticalLine>
                <Splash image={breakpoint === "desktop" ? props.profilePictures[2]?.fields.image.fields.file.url : props.profilePictures[1]?.fields.image.fields.file.url}></Splash>
            </Section>

            {/* <Section paddingTop={200}>
                <VerticalLine textElement="h2" text="RELEASES"></VerticalLine>
                <Carousel songs={props.songs}></Carousel>
            </Section> */}

            <Section>
                <BackgroundImage></BackgroundImage>
                <VerticalLine textElement="h2" text="RELEASES"></VerticalLine>
                <Releases songs={props.songs}></Releases>
            </Section>
        </>
    );
}
