import { styled } from "../../../stitches.config";

const IFrame = styled('iframe', {

});

interface props{
    id:string;
}

export default function YoutubeIFrame(props:props){

    
    return(
        <IFrame 
            width="560" 
            height="315" 
            src={`https://youtube.com/embed/${props.id}`}
            title="YouTube video player" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen={true}
        ></IFrame>
    );
}