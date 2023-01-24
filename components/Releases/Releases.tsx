import { useRecoilState } from "recoil";
import { styled } from "../../stitches.config";
import Card from "./Card";
import { useEffect, useState } from "react";
import H2 from "../H2";
import { Song } from "../../models/Song";
import axios from "axios";
import { Songs } from "../../atoms/Songs";
import { useInView } from "react-intersection-observer";
import { ReleasesInView } from "../../atoms/ReleasesInView";
import TopRef from "../TopRef";

const Div = styled('div', {

    marginTop:'-40vh',

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
    const [releasesInView, setReleasesInView] = useRecoilState(ReleasesInView);
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

        if(window.innerWidth >= 735){ // >=735 is 2 columns of releases, <735 is 1 column
            setThresh(0.6);
        }
        else{
            setThresh(0.3);
        }
    }, []);

    useEffect(() => {
        
        if(releasesInView.topRefInView){
            setReleasesInView(prev => ({...prev, inView: inView}));
        }

    }, [inView]);
    
    return(
        <Div ref={ref}>
            <TopRef category="releases"></TopRef>

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