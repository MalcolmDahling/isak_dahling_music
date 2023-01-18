import { useRecoilState, useRecoilValue } from "recoil";
import { Songs } from "../../atoms/Songs";
import { styled } from "../../stitches.config";
import Card from "./Card";
import { useEffect, useRef } from "react";
import { ReleasesScroll } from "../../atoms/ReleasesScroll";
import { throttle } from "throttle-debounce";

const Div = styled('div', {

    paddingLeft:40,
    paddingBottom:200,
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
    const ref = useRef<any>();

    // let percentage = Math.round( (window.pageYOffset - ref.current?.getBoundingClientRect().top) / ref.current?.getBoundingClientRect().height / 2 * 100 );

    const handleScroll = throttle(50, () => {


        setReleasesScroll({
            pixelsFromTop: window.pageYOffset - ref.current?.getBoundingClientRect().top,
            height: ref.current?.clientHeight
        });
    },{});

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return(() => {

            window.removeEventListener('scroll', handleScroll);
        });
    }, []);

    
    return(
        <Div ref={ref}>
            <H2>RELEASES</H2>

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