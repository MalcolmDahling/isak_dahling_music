import { Song } from "../../models/Song";
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

    '&:hover > div':{
        filter:'blur(2px) grayscale(1)'
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

interface props{
    songs:Song[];
}

export default function Releases(props:props){
    
    return(
        <Div>
            <H2>RELEASES</H2>

            <CardContainer>
                {
                    props.songs.map(song => {

                        return(

                            <Card title={song.fields.title} releaseDate={song.fields.releaseDate} image={song.fields.image.fields.file.url} key={song.fields.title}></Card>
                        );
                    })
                }

                {/* <Card title={props.songs[0].fields.title} releaseDate={"asdf"} image={props.songs[0].fields.image.fields.file.url}></Card> */}
            </CardContainer>
        </Div>
    );
}