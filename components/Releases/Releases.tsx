import { useRecoilState } from "recoil";
import { styled } from "../../stitches.config";
import Card from "./Card";
import { useEffect, useState } from "react";
import H2 from "../H2";
import { Song } from "../../models/Song";
import axios from "axios";
import { Songs } from "../../atoms/Songs";
import { useInView } from "react-intersection-observer";
import { ComponentInView } from "../../atoms/ComponentInView";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "../../variables/breakpoints";

const Div = styled('div', {

    paddingLeft:20,
    paddingRight:20,
    paddingBottom:50,

    '@tablet':{
        paddingLeft:50,
    },

    '@mobile':{
        paddingLeft:20,
    }
});

const CardContainer = styled('div', {

    maxWidth:800,
    margin:'auto',

    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    gap:40,

    pointerEvents:'none',

    '@desktop':{

        '&:hover > div':{
            filter:'blur(2px) grayscale(1)'
        }
    }
});

export default function Releases(){

    const [songs, setSongs] = useRecoilState(Songs);
    const [componentInView, setComponentInView] = useRecoilState(ComponentInView);
    const {breakpoint} = useBreakpoint(BREAKPOINTS, 'desktop');
    const [thresh, setThresh] = useState(0);
    const {ref, inView, entry} = useInView({threshold:thresh});

    async function getSongs(){

        let res = await axios.get('api/getSongs');

        let sortedArr = res.data.items.sort((a:Song, b:Song) => {

            return new Date(b.fields.releaseDate).getTime() - new Date(a.fields.releaseDate).getTime();
        });

        setSongs(sortedArr);
    }

    useEffect(() => {

        getSongs();
    }, []);

    useEffect(() => {

        if(breakpoint === 'desktop'){
            setThresh(0.4);
        }
        if(breakpoint === 'tablet' || breakpoint === 'mobile'){
            setThresh(0.15);
        }
    }, [breakpoint]);

    useEffect(() => {

        if(!entry) return;

        if(entry.boundingClientRect.top > 0){ //positive below viewport, negative when above viewport

            setComponentInView(prev => ({...prev, releases:entry.isIntersecting}))
        }

    }, [entry]);
    
    return(
        <Div ref={ref}>

            <H2 text="- RELEASES -" color="black"></H2>

            <CardContainer>
                <>
                    {
                        songs.map(song => {

                            return(

                                <Card title={song.fields.title} releaseDate={song.fields.releaseDate} image={song.fields.image.fields.file.url} key={song.fields.title}></Card>
                            );
                        })
                    }
                </>
            </CardContainer>
        </Div>
    );
}