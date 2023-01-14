import { useRecoilState, useRecoilValue } from "recoil";
import { Songs } from "../../atoms/Songs";
import { styled } from "../../stitches.config";
import { useEffect } from "react";
import Card from "./Card";
import { ReleasesInView } from "../../atoms/ReleasesInView";
import { useInView } from "react-intersection-observer";

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
    fontSize:'calc(30px + 3vw)',
    userSelect:'none',
});

export default function Releases(){

    const songs = useRecoilValue(Songs);
    
    const [releasesInView, setReleasesInView] = useRecoilState(ReleasesInView);
    const { ref, inView, entry } = useInView();

    useEffect(() => {

        setReleasesInView(inView);
    }, [inView]);
    
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