import { styled } from "../../../stitches.config";

const IFrame = styled('iframe', {

    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    
    backgroundColor:'#282828',
    border:'2px solid $white'
});

interface props{
    id:string;
}

export default function SpotifyIFrame(props:props){

    
    return(
        <IFrame 
            src={`https://open.spotify.com/embed/track/${props.id}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            as="iframe"
        ></IFrame>
    );
}