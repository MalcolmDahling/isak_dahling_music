import { useRecoilState } from "recoil";
import { ToggleMenu } from "../../atoms/ToggleMenu";
import { keyframes, styled } from "../../stitches.config";
import { useState, useEffect } from "react";
import VerticalLine from "../VerticalLine";

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


export default function Menu(){

    const [toggleMenu, setToggleMenu] = useRecoilState(ToggleMenu);
    const [showMenu, setShowMenu] = useState(false);

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
                    
                    <VerticalLine textElement="h2" text="MENU" top={true} bottom={true}></VerticalLine>
                    
                </BackgroundDiv>
            }
        </>
    );
}