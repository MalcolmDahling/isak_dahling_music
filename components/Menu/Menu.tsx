import { useRecoilState, useRecoilValue } from "recoil";
import { ToggleMenu } from "../../atoms/ToggleMenu";
import { keyframes, styled } from "../../stitches.config";
import { useState, useEffect } from "react";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "../../variables/breakpoints";
import Nav from "./Nav";
import Socials from "./Socials";
import { ProfilePictures } from "../../atoms/ProfilePictures";
import { ToggleScrolling } from "../../atoms/ToggleScrolling";

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
    zIndex:8,

    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:20,

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

    '@tablet':{
        paddingTop:60
    }
});

const FlexDiv = styled('div', {

    paddingTop:20,

    display:'flex',
    gap:20,
    margin:'auto',

    '@tablet':{
        width:'80%'
    },
});

const Img = styled('img', {

    height:'80vh',
    maxHeight:600
});

export default function Menu(){

    const toggleMenu = useRecoilValue(ToggleMenu);
    const [showMenu, setShowMenu] = useState(false);
    const profilePictures = useRecoilValue(ProfilePictures);
    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
    const [toggleScrolling, setToggleScrolling] = useRecoilState(ToggleScrolling);

    useEffect(() => {

        if(toggleMenu){

            //disables scrolling
            setToggleScrolling(false);

            setShowMenu(true);
        }

        else{

            setTimeout(() => {

                //enables scrolling
                setToggleScrolling(true);
            }, 250);

            setTimeout(() => {

                setShowMenu(false); 
            }, 500);
        }
        
    }, [toggleMenu]);

    return(
        <>
            { showMenu && 
                <BackgroundDiv fade={toggleMenu}>
            
                    <FlexDiv>
                        {breakpoint === "desktop" && <Img src={profilePictures[1]?.fields.image.fields.file.url} draggable={false}></Img>}
                        <Nav></Nav>
                    </FlexDiv>
                    
                    <Socials></Socials>

                </BackgroundDiv>
            }
        </>
    );
}