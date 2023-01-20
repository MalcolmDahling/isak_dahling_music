import ReactPlayer from "react-player";

interface props{
    link:string;
}

export default function SoundCloudIFrame(props:props){

    return(
        <ReactPlayer url={props.link}></ReactPlayer>
    );
}