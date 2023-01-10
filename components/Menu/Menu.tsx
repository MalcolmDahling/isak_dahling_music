import { useRecoilState } from "recoil";
import { ToggleMenu } from "../../atoms/ToggleMenu";
import { keyframes, styled } from "../../stitches.config";
import { useState, useEffect } from "react";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "../../variables/breakpoints";
import Nav from "./Nav";
import Socials from "./Socials";
import { ProfilePicture } from "../../models/ProfilePicture";

const FadeOut = keyframes({

    '0%':{
        filter:'blur(0)',
        opacity:1
    },

    '100%':{
        filter:'blur(12px)',
        opacity:0
    }
});

const FadeIn = keyframes({

    '0%':{
        filter:'blur(12px)',
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
    zIndex:2,
    padding:0,

    display:'flex',
    justifyContent:'center',
    alignItems:'center',

    backgroundColor:'$black',

    variants:{
        fade:{
            true:{
                animation:`${FadeIn} 500ms forwards`
            },
            false:{
                animation:`${FadeOut} 500ms forwards`
            }
        }
    }
});

const OuterDiv = styled('div', {

    '@tablet':{
        width:'80%'
    }
});

const InnerDiv = styled('div', {

    display:'flex',
    justifyContent:'center',
    gap:20,

    '@tablet':{
    },
});

const Img = styled('img', {

    height:600
});

interface props{

    profilePictures:ProfilePicture[];
};

export default function Menu(props:props){

    const [toggleMenu, setToggleMenu] = useRecoilState(ToggleMenu);
    const [showMenu, setShowMenu] = useState(false);
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
            
                    <OuterDiv>
                        <InnerDiv>
                            {breakpoint === "desktop" && <Img src={props.profilePictures[0]?.fields.image.fields.file.url} draggable={false}></Img>}
                            <Nav></Nav>
                            
                        </InnerDiv>
                    </OuterDiv>

                    <Socials></Socials>

                </BackgroundDiv>
            }
        </>
    );
}