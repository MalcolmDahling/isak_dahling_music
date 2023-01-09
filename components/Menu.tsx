import { useRecoilState } from "recoil";
import { ToggleMenu } from "../atoms/ToggleMenu";
import { keyframes, styled } from "../stitches.config";
import { useState, useEffect } from "react";
import { ProfilePicture } from "../models/ProfilePicture";
import Link from "next/link";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "../variables/breakpoints";

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

const Inner = styled('div', {

    display:'flex',
    gap:20
});

const Img = styled('img', {

    height:600
});

const Nav = styled('nav', {

    width:'30vw',
    maxWidth:650,
    minWidth:300,

    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    // pointerEvents:'none',

    // '&:hover > div':{
    //     opacity:0.3
    // }

    '&:hover a':{
        color:'rgba(255,255,255,0.5)'
    }

});

const StyledLink = styled(Link, {

    position:'relative',
    paddingBottom:10,
    paddingLeft:20,

    borderBottom:'1px solid rgba(255,255,255,0.5)',
    fontSize:50,
    color:'$white',
    textDecoration:'none',
    transition:'all 500ms',

    '&:hover':{
        color:'rgba(255,255,255,1) !important'
    },

    '&:hover div':{
        width:'100%'
    }
});

const ExpandingLine = styled('div', {

    position:'absolute',
    bottom:-1,
    left:0,
    height:1,
    width:0,
    transition:'all 500ms',
    
    backgroundColor:'$white'
});

interface props{

    profilePictures:ProfilePicture[];
};

export default function Menu(props:props){

    const [toggleMenu, setToggleMenu] = useRecoilState(ToggleMenu);
    const [showMenu, setShowMenu] = useState(false);
    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');

    const menuOptions = ['HOME', 'MUSIC', 'NEWS', 'ABOUT', 'CONTACT'];

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
            
                    <Inner>
                        {breakpoint === "desktop" && <Img src={props.profilePictures[0]?.fields.image.fields.file.url} draggable={false}></Img>}

                        <Nav>
                            {
                                menuOptions.map(option => {

                                    return (
                                        <StyledLink href="#" key={option}>
                                            {option}
                                            <ExpandingLine></ExpandingLine>
                                        </StyledLink>
                                    );
                                })
                            }
                        </Nav>
                    </Inner>

                </BackgroundDiv>
            }
        </>
    );
}