import { useRecoilState } from "recoil";
import { ToggleMenu } from "../atoms/ToggleMenu";
import { keyframes, styled } from "../stitches.config";
import { useEffect, useRef, useState } from "react";

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
    zIndex:9,
    padding:0,

    display:'flex',
    flexDirection:'column',
    gap:8,
    justifyContent:'center',
    alignItems:'center',

    backgroundColor:'transparent',
    border:'none',
    userSelect:'none',

    mixBlendMode:'difference',

    '@mobile':{
        mixBlendMode:'normal',
    },

    '&:focus':{
        'div':{
            opacity:1
        }
    }
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
                    opacity:0.5,
                }
            }
        }
    },
});

const Line = styled('div', {

    width:'100%',
    height:5,

    transition:'all 250ms',
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
        },

        border:{
            true:{
                '@mobile':{
                    border:'1px solid black',
                    marginBottom:-2
                }
            }
        }
    }
});

const Text = styled('p', {

    margin:0,

    fontSize:16,
    userSelect:'none',
    color:'$white',

    '@mobile':{
        textShadow:'-1px -1px 0 #000, 0   -1px 0 #000, 1px -1px 0 #000, 1px  0   0 #000, 1px  1px 0 #000, 0    1px 0 #000, -1px  1px 0 #000, -1px  0   0 #000'
    },

    variants:{
        show:{
            true:{
                animation:`${FadeOut} 500ms forwards`
            },
            
            false:{
                animation:`${FadeIn} 500ms forwards`
            }
        },

        marginTop:{
            true:{
                '@mobile':{
                    marginTop:6
                }
            }
        }
    }
});

interface props{
    breakpoint:'mobile' | 'tablet' | 'desktop';
}

export default function Hamburger(props:props){

    const [toggleMenu, setToggleMenu] = useRecoilState(ToggleMenu);
    const [rotate, setRotate] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const ref = useRef<any>();

    function handleOnMouseEnter(){

        if(props.breakpoint === 'desktop'){
            setRotate(true);
        }

        setIsHovering(true);
    }

    function handleOnMouseLeave(){

        if(toggleMenu === false && props.breakpoint === 'desktop'){

            setRotate(false);
        }

        setIsHovering(false);
    }

    function handleClick(e:React.MouseEvent){

        //remove focus so button will fade out.
        ref.current?.blur();

        if(!e.detail || e.detail == 1){ //prevents double clicking

            if(props.breakpoint !== 'desktop'){
                
                if(toggleMenu){
                    setRotate(false);
                }
                else{
                    setRotate(true);
                }
            }
            
            setToggleMenu(!toggleMenu);
        }
    }

    useEffect(() => {

        //resets hamburger rotation after clicking an option in the menu
        if(toggleMenu === false){

            if(props.breakpoint === 'desktop' && isHovering === false){
                setRotate(false);
            }

            if(props.breakpoint !== 'desktop'){
                setRotate(false);
            }
        }

    }, [toggleMenu]);

    return(
        <Button ref={ref}>

            <LineContainer 
                rotate={toggleMenu}
                opacity={toggleMenu}
                onClick={handleClick}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >

                <Line rotateTop={rotate} border={!toggleMenu}></Line>
                <Line border={!toggleMenu}></Line>
                <Line rotateBottom={rotate} border={!toggleMenu}></Line>
                
            </LineContainer>

            <Text show={toggleMenu} marginTop={toggleMenu}>MENU</Text>
        </Button>
    );
}