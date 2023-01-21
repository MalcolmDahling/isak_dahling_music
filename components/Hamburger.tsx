import { useRecoilState } from "recoil";
import { ToggleMenu } from "../atoms/ToggleMenu";
import { keyframes, styled } from "../stitches.config";
import { useState } from "react";

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

const Button = styled('button', {

    position:'fixed',
    top:30,
    right:30,
    zIndex:4,
    padding:0,

    display:'flex',
    flexDirection:'column',
    gap:8,
    justifyContent:'center',
    alignItems:'center',

    mixBlendMode:'difference',
    backgroundColor:'transparent',
    border:'none'
});

const LineContainer = styled('div', {

    width:'100%',

    display:'flex',
    flexDirection:'column',
    gap:8,

    transition:'transform 500ms, opacity 250ms',
    cursor:'pointer',

    variants:{
        rotate:{
            true:{
                transform:'rotate(135deg)'
            },

            false:{
                transform:'rotate(0deg)'
            }
        },

        opacity:{
            true:{
                '&:not(:hover)':{
                    opacity:0.5
                }
            }
        }
    },
});

const Line = styled('div', {

    width:'100%',
    height:5,

    transition:'250ms',
    transformOrigin:'center',
    borderRadius:10,
    backgroundColor:'$white',

    variants:{
        rotateTop:{
            true:{
                transform:'rotate(90deg) translateX(13px)'
            }
        },

        rotateBottom:{
            true:{
                transform:'rotate(90deg) translateX(-13px)'
            }
        }
    }
});

const Text = styled('p', {

    margin:0,

    fontSize:15,
    userSelect:'none',
    color:'$white',

    variants:{
        show:{
            true:{
                animation:`${FadeOut} 500ms forwards`
            },
            
            false:{
                animation:`${FadeIn} 500ms forwards`
            }
        }
    }
});

export default function Hamburger(){

    const [toggleMenu, setToggleMenu] = useRecoilState(ToggleMenu);
    const [rotate, setRotate] = useState(false);

    function handleOnMouseEnter(){

        setRotate(true);
    }

    function handleOnMouseLeave(){

        if(toggleMenu === false){

            setRotate(false);
        }
    }

    function handleClick(e:React.MouseEvent){

        if(!e.detail || e.detail == 1){ //prevents double clicking

            setToggleMenu(!toggleMenu);
        }
    }

    return(
        <Button>

            <LineContainer 
                rotate={toggleMenu}
                opacity={toggleMenu}
                onClick={handleClick}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >

                <Line rotateTop={rotate}></Line>
                <Line></Line>
                <Line rotateBottom={rotate}></Line>
                
            </LineContainer>

            <Text show={toggleMenu}>MENU</Text>
        </Button>
    );
}