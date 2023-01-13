import { useRecoilValue } from "recoil";
import { Songs } from "../../atoms/Songs";
import { styled } from "../../stitches.config";
import Card from "./Card";

const Div = styled('div', {

    paddingLeft:40,
    paddingBottom:200,
});

const CardContainer = styled('div', {

    maxWidth:1920,
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

    marginTop:200,
    marginBottom:50,

    textShadow:'0px 0px 50px rgba(0, 0, 0, 1)',
    textAlign:'center',
    fontSize:'calc(30px + 5vw)',
    userSelect:'none',
});

export default function Releases(){

    const songs = useRecoilValue(Songs);
    
    return(
        <Div>
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