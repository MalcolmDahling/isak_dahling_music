import { useRecoilValue } from "recoil";
import { SocialMedia } from "../../atoms/SocialMedia";
import { styled } from "../../stitches.config";
import { ISocialMedia } from "../../models/ISocialMedia";

const Div = styled('div', {

    display:'flex',

    '&:hover button':{
        opacity:0.5
    }
});

const Button = styled('button', {

    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:5,

    backgroundColor:'transparent',
    border:'none',
    cursor:'pointer',
    transition:'all 250ms',

    '&:hover':{
        opacity:'1 !important'
    }
});

const Img = styled('img', {

    width:70,
    height:70,

    '@tablet':{
        width:40,
        height:40,
    }
});

const P = styled('p', {

    margin:0,

    color:'$white'
});

type props = {
    selectStream:(title:string) => void;
    spotify:boolean;
    soundCloud:boolean;
    youtube:boolean;
}

export default function SelectStream(props:props){

    const socialMedia = useRecoilValue<ISocialMedia[]>(SocialMedia);

    return(
        <Div>
            {props.spotify &&
                <Button onClick={() => {props.selectStream('spotify')}}>
                    <Img src={socialMedia[1].fields.image.fields.file.url}></Img>
                    <P>Spotify</P>
                </Button>
            }

            {props.soundCloud &&
                <Button onClick={() => {props.selectStream('soundCloud')}}>
                    <Img src={socialMedia[2].fields.image.fields.file.url}></Img>
                    <P>SoundCloud</P>
                </Button>
            }

            {props.youtube &&
                <Button onClick={() => {props.selectStream('youtube')}}>
                    <Img src={socialMedia[4].fields.image.fields.file.url}></Img>
                    <P>YouTube</P>
                </Button>
            }
        </Div>
    );
}