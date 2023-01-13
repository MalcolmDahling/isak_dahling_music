import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "../../stitches.config";
import { ToggleMusicPopup } from "../../atoms/ToggleMusicPopup";

const Div = styled('div', {

    position:'relative',
    maxWidth:400,

    backgroundSize:'cover',
    userSelect:'none',
    border:'2px solid $white',
    transition:'all 500ms',
    cursor:'pointer',
    overflow:'hidden',
    borderRadius:15,
    pointerEvents:'auto',

    '@desktop':{

        '&:hover':{
            transform:'scale(1.1)',
            filter:'blur(0px) grayscale(0) !important',
        }
    }
});

const Overlay = styled('div', {

    position:'absolute',
    inset:0,

    backgroundImage:'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)'
});

const Img = styled('img',{

    width:'100%',
    height:'100%'
});

const BottomDiv = styled('div', {

    position:'absolute',
    bottom:20,
    left:20,
    right:20,

    display:'flex',
    justifyContent:'space-between'
});

const Title = styled('h3', {

    margin:0,
    fontSize:25,
});

const ReleaseDate = styled('p', {

    margin:0,
});

const Icon = styled('img', {

    width:50,
});

interface props{

    title:string;
    releaseDate:string;
    image:string;
}

export default function Card(props:props){

    const [releaseDate, setReleaseDate] = useState('');
    const [toggleMusicPopup, setToggleMusicPopup] = useRecoilState(ToggleMusicPopup);

    useEffect(() => {

        let date = new Date(props.releaseDate);
        setReleaseDate(date.getFullYear().toString()); 
    }, []);

    function handleClick(){

        setToggleMusicPopup({show:true, title:props.title});
    }

    return(
        <Div onClick={handleClick}>
            <Overlay></Overlay> 
            <Img src={props.image} alt={props.title}></Img>

            <BottomDiv>
                <div>
                    <Title>{props.title}</Title>
                    <ReleaseDate>{releaseDate}</ReleaseDate>
                </div>
                <Icon src="/images/icons/play.svg"></Icon>
            </BottomDiv>
        </Div>
    );
}