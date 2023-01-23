import { useRecoilValue } from "recoil";
import { ToggleMenu } from "../../atoms/ToggleMenu";
import { keyframes, styled } from "../../stitches.config";
import { useState, useEffect } from "react";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "../../variables/breakpoints";
import Nav from "./Nav";
import Socials from "./Socials";
import { ProfilePictures } from "../../atoms/ProfilePictures";

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
    inset:'0',
    zIndex:3,

    
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

    '@desktop':{

        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
    },

    '@tablet':{
        paddingTop:50
    }
});

const Div = styled('div', {

    margin:'auto',

    display:'flex',
    gap:20,

    '@tablet':{
        width:'80%'
    },
});

const Img = styled('img', {

    height:600
});

export default function Menu(){

    const toggleMenu = useRecoilValue(ToggleMenu);
    const [showMenu, setShowMenu] = useState(false);
    const profilePictures = useRecoilValue(ProfilePictures);
    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');

    useEffect(() => {

        if(toggleMenu){

            setShowMenu(true);
        }

        else{

            setTimeout(() => {

                setShowMenu(false);
            }, 500);
        }
        
    }, [toggleMenu]);

    return(
        <>
            { showMenu && 
                <BackgroundDiv fade={toggleMenu}>
            
                    <Div>
                        {breakpoint === "desktop" && <Img src={profilePictures[0]?.fields.image.fields.file.url} draggable={false}></Img>}
                        <Nav></Nav>
                    </Div>
                    
                    <Socials></Socials>

                </BackgroundDiv>
            }
        </>
    );
}