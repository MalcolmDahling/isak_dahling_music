import ReactPlayer from "react-player";
import { styled } from "../../../stitches.config";

const IFrame = styled(ReactPlayer, {

    position:'absolute',
    top:0,
    left:0,

    border:'2px solid $white'
});

interface props{
    link:string;
}

export default function SoundCloudIFrame(props:props){

    return(
        <IFrame url={props.link} width="100%" height="100%" top="0" left="0"></IFrame>
    );
}