import { useRecoilState, useRecoilValue } from "recoil";
import { Songs } from "../../atoms/Songs";
import { styled } from "../../stitches.config";
import Card from "./Card";
import { useEffect, useRef } from "react";
import { ReleasesScroll } from "../../atoms/ReleasesScroll";
import { ReleasesInView } from "../../atoms/ReleasesInView";
import { debounce } from "throttle-debounce";

const Div = styled('div', {

    paddingLeft:20,
    paddingRight:20,

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

const H2 = styled('h2', {

    margin:0,
    marginBottom:50,

    color:'$black',
    textAlign:'center',
    fontSize:'$header',
    userSelect:'none',
});

export default function Releases(){

    const songs = useRecoilValue(Songs);
    const [releasesScroll, setReleasesScroll] = useRecoilState(ReleasesScroll);
    const [releasesInView, setReleasesInView] = useRecoilState(ReleasesInView);
    const ref = useRef<any>();
    

    useEffect(() => { //used for ZoomEffect

        window.onresize = debounce(250, () => {

            setReleasesScroll(prev => ({...prev, 
                releasesPixelsFromTop: ref.current?.getBoundingClientRect().top + window.pageYOffset
            })); 
        });
    }, []);

    useEffect(() => { //used for ZoomEffect

        setReleasesScroll(prev => ({...prev, 
            releasesPixelsFromTop: ref.current?.getBoundingClientRect().top + window.pageYOffset
        }));

    }, [ref]);
    
    return(
        <Div ref={ref}>
            <H2>- RELEASES -</H2>

            <CardContainer>
                {
                    songs.map(song => {

                        return(

                            <Card title={song.fields.title} releaseDate={song.fields.releaseDate} image={song.fields.image.fields.file.url} key={song.fields.title}></Card>
                        );
                    })
                }
            </CardContainer>
        </Div>
    );
}