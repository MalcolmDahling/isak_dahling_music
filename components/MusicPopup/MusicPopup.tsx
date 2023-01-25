import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Songs } from "../../atoms/Songs";
import { ToggleMusicPopup } from "../../atoms/ToggleMusicPopup";
import { Song } from "../../models/Song";
import { keyframes, styled } from "../../stitches.config";
import Exit from "./Exit";
import SoundCloudIFrame from "./IFrames/SoundCloudIFrame";
import SpotifyIFrame from "./IFrames/SpotifyIFrame";
import YoutubeIFrame from "./IFrames/YoutubeIFrame";
import SelectStream from "./SelectStream";

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
    zIndex:10,

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

    width:'100%',
    maxWidth:650,
    position:'relative',
    
    display:'flex',
    flexDirection:'column',
    gap:20,

    '@desktop':{
        paddingRight:55,
    },

    '@tablet':{
        paddingLeft:30,
        paddingRight:30
    }
});

const IFrameWrapper = styled('div', {

    position:'relative',
    paddingBottom:'56.25%',
    height:0,
});


const BottomDiv = styled('div', {

    display:'flex',
    justifyContent:'space-between',

    '@tablet':{
        flexDirection:'column',
        alignItems:'center',
        gap:20
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

interface props{
    breakpoint:string;
}

export default function MusicPopup(props:props){

    const [toggleMusicPopup, setToggleMusicPopup] = useRecoilState(ToggleMusicPopup);
    const songs = useRecoilValue(Songs);
    const [currentSong, setCurrentSong] = useState<Song>();
    const [showPopup, setShowPopup] = useState(false);
    const [selectedStream, setSelectedStream] = useState('spotify');

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
            setSelectedStream('spotify');
        }, 500);
    }

    function selectStream(title:string){

        setSelectedStream(title);
    }

    return(
        <>
            { showPopup &&

                <BackgroundDiv fade={toggleMusicPopup.show}>

                    {props.breakpoint !== 'desktop' && <Exit close={close}></Exit>}

                    <ContentDiv>

                        {props.breakpoint === 'desktop' && <Exit close={close}></Exit>}

                        {props.breakpoint !== 'desktop' &&
                            <TextDiv>
                                <H2>{currentSong?.fields.title}</H2>
                                <P>{new Date(currentSong?.fields.releaseDate || '').getFullYear().toString()}</P>
                            </TextDiv>
                        }

                        <IFrameWrapper>
                            {selectedStream === 'spotify' && <SpotifyIFrame id={currentSong?.fields.spotifyID || ''}></SpotifyIFrame>}
                            {selectedStream === 'youtube' && <YoutubeIFrame id={currentSong?.fields.youtubeID || ''}></YoutubeIFrame>}
                            {selectedStream === 'soundCloud' && <SoundCloudIFrame link={currentSong?.fields.soundCloudLink || ''}></SoundCloudIFrame>}
                        </IFrameWrapper>

                        <BottomDiv>
                            {props.breakpoint === 'desktop' &&
                                <TextDiv>
                                    <H2>{currentSong?.fields.title}</H2>
                                    <P>{new Date(currentSong?.fields.releaseDate || '').getFullYear().toString()}</P>
                                </TextDiv>
                            }

                            <SelectStream
                                selectStream={selectStream}
                                selectedStream={selectedStream}
                                spotify={currentSong?.fields.spotifyID ? true : false}
                                soundCloud={currentSong?.fields.soundCloudLink ? true : false}
                                youtube={currentSong?.fields.youtubeID ? true : false}
                            ></SelectStream>
                        </BottomDiv>

                    </ContentDiv>
                </BackgroundDiv>
            }
        </>
    );
}