import { Song } from "../../models/Song";
import { styled } from "../../stitches.config";
import Card from "./Card";

const Div = styled('div', {

    maxWidth:1000,
    paddingLeft:40,
    margin:'auto',

    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    gap:40
});

const H2 = styled('h2', {

    textAlign:'center',
    fontSize:100
});

interface props{
    songs:Song[];
}

export default function Releases(props:props){
    
    return(
        <>
            <H2>RELEASES</H2>

            <Div>
                {
                    props.songs.map(song => {

                        return(

                            <Card title={song.fields.title} releaseDate={song.fields.releaseDate} image={song.fields.image.fields.file.url}></Card>
                        );
                    })
                }
            </Div>
        </>
    );
}