import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Songs } from "../../atoms/Songs";
import { ToggleMusicPopup } from "../../atoms/ToggleMusicPopup";
import { Song } from "../../models/Song";
import { keyframes, styled } from "../../stitches.config";
import Exit from "./Exit";

const FadeOut = keyframes({

    '0%':{
        filter:'blur(0)',
        opacity:1
    },

    '100%':{
        filter:'blur(6px)',
        opacity:0
    }
});

const FadeIn = keyframes({

    '0%':{
        filter:'blur(6px)',
        opacity:0
    },

    '100%':{
        filter:'blur(0)',
        opacity:1
    }
});

const BackgroundDiv = styled('div', {

    position:'fixed',
    inset:0,
    zIndex:3,

    display:'flex',
    justifyContent:'center',
    alignItems:'center',

    backgroundColor:'rgba(0,0,0,0.75)',
    backdropFilter:'blur(12px)',

    variants:{
        fade:{
            true:{
                animation:`${FadeIn} 500ms forwards`
            },
            false:{
                animation:`${FadeOut} 500ms forwards`
            }
        }
    },
});

const ContentDiv = styled('div', {

    position:'relative',

    display:'flex',
    gap:20,

    // border:'1px solid red',

    '@desktop':{

        minWidth:800
    }
});

const TextDiv = styled('div', {

});

const H2 = styled('h2', {

    margin:0,

    fontSize:30,
    color:'$white',
});

const P = styled('p', {

    margin:0,

    fontSize:25,
    
});

const Img = styled('img', {

    maxWidth:250,

    border:'2px solid $white',
});

export default function MusicPopup(){

    const [toggleMusicPopup, setToggleMusicPopup] = useRecoilState(ToggleMusicPopup);
    const songs = useRecoilValue(Songs);
    const [currentSong, setCurrentSong] = useState<Song>();
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {

        if(toggleMusicPopup.title !== ''){

            let index = songs.findIndex(x => x.fields.title === toggleMusicPopup.title);
            setCurrentSong(songs[index]);

            setShowPopup(true);
        }

    }, [toggleMusicPopup]);

    function close(){

        setToggleMusicPopup({show:false, title:''});

        setTimeout(() => {

            setShowPopup(false);
        }, 500);
    }

    return(
        <>
            { showPopup &&

                <BackgroundDiv fade={toggleMusicPopup.show}>
                    <ContentDiv>
                        <Exit close={close}></Exit>
                        
                        <Img src={currentSong?.fields.image.fields.file.url} alt={currentSong?.fields.image.fields.title}></Img>

                        <TextDiv>
                            <H2>{currentSong?.fields.title}</H2>
                            <P>{new Date(currentSong?.fields.releaseDate || '').getFullYear().toString()}</P>
                        </TextDiv>
                        
                    </ContentDiv>
                </BackgroundDiv>
            }
        </>
    );
}