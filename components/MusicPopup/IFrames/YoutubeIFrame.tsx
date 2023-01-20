import { styled } from "../../../stitches.config";

const IFrame = styled('iframe', {

    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%',

    border:'2px solid $white'
});

interface props{
    id:string;
}

export default function YoutubeIFrame(props:props){

    
    return(
        <IFrame 
            src={`https://youtube.com/embed/${props.id}`}
            title="YouTube video player" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen={true}
        ></IFrame>
    );
}