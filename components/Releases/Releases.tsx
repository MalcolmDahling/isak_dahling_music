import { useRecoilState } from "recoil";
import { styled } from "../../stitches.config";
import Card from "./Card";
import { useEffect } from "react";
import H2 from "../H2";
import { Song } from "../../models/Song";
import axios from "axios";
import { Songs } from "../../atoms/Songs";
import { useInView } from "react-intersection-observer";
import { ComponentInView } from "../../atoms/ComponentInView";
import StickyText from "../StickyText";
import RefDiv1 from "../RefDiv1";

const Div = styled('div', {

    position:'relative',
    paddingLeft:70,
    paddingRight:70,
    paddingBottom:50,

    '@mobile':{
        paddingLeft:20,
        paddingRight:20,
    }
});

const RefDiv0 = styled('div', {

    position:'absolute',
    top:0,
    left:0,
    height:'80vh',
    width:10
});

const CardContainer = styled('div', {

    position:'relative',
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
    const {ref, inView, entry} = useInView({threshold:componentInView.threshold});

    async function getSongs(){

        let res = await axios.get('api/getSongs');

        let sortedArr = res.data.items.sort((a:Song, b:Song) => {

            return new Date(b.fields.releaseDate).getTime() - new Date(a.fields.releaseDate).getTime();
        });

        setSongs(sortedArr);
    }

    useEffect(() => {

        getSongs();
    }, []);+

    useEffect(() => {

        if(!entry) return;

        if(entry.boundingClientRect.top > 0){ //positive below viewport, negative when above viewport

            setComponentInView(prev => ({...prev, releases:entry.intersectionRatio}));
        }
    }, [entry]);
    
    return(
        <Div id="RELEASES">

            <StickyText text="RELEASES" marginTop={150} fixedColor={false}></StickyText>
            <RefDiv0 ref={ref}></RefDiv0>
            <RefDiv1 category="releases"></RefDiv1>

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