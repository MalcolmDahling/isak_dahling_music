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

    height:'60vh'
});

const Nav = styled('nav', {

    width:'40vw',
    maxWidth:'30vw',

    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',

    pointerEvents:'none',

    '&:hover > *':{
        opacity:0.5
    },

});

const LinkDiv = styled('div', {

    paddingLeft:20,
    paddingBottom:10,

    borderBottom:'1px solid white',
    pointerEvents:'auto',

    transition:'opacity 500ms',

    '&:hover':{
        opacity:1
    }
});

const StyledLink = styled(Link, {

    fontSize:50,
    color:'$white',
    textDecoration:'none',
});

interface props{

    profilePictures:ProfilePicture[];
};

export default function Menu(props:props){

    const [toggleMenu, setToggleMenu] = useRecoilState(ToggleMenu);
    const [showMenu, setShowMenu] = useState(false);
    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktopBig');

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
                        {breakpoint === "desktopBig" && <Img src={props.profilePictures[0]?.fields.image.fields.file.url} draggable={false}></Img>}

                        <Nav>
                            <LinkDiv>
                                <StyledLink href="#">HOME</StyledLink>
                            </LinkDiv>

                            <LinkDiv>
                                <StyledLink href="#">MUSIC</StyledLink>
                            </LinkDiv>
                            
                            <LinkDiv>
                                <StyledLink href="#">NEWS</StyledLink>
                            </LinkDiv>
                            
                            <LinkDiv>
                                <StyledLink href="#">ABOUT</StyledLink>
                            </LinkDiv>
                            
                            <LinkDiv>
                                <StyledLink href="#">CONTACT</StyledLink>
                            </LinkDiv>
                        </Nav>
                    </Inner>

                </BackgroundDiv>
            }
        </>
    );
}