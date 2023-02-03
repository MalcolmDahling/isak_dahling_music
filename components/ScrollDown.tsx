import { useEffect, useState } from "react";
import { keyframes, styled } from "../stitches.config";

const fadeOut = keyframes({

    '0%':{
        opacity:1
    },

    '100%':{
        opacity:0
    }
});

const Outer = styled('div', {

    height:150,

    position:'absolute',
    transform:'translate(-50%)',
    left:'50%',
    bottom:'0%',

    userSelect:'none',

    variants:{
        fadeOut:{
            true:{

                animation:`${fadeOut} 1000ms forwards`
            }
        }
    }
});

const ArrowAnim = keyframes({
    '0%':{transform:'translateY(0%)'},
    '50%':{transform:'translateY(100%)'},
    '100%':{transform:'translateY(0%)'}
});

const Inner = styled('div', {

    animation:`${ArrowAnim} 2000ms infinite ease-in-out`
});

const Arrow = styled('img', {

    width:25,
    display:'block',
    marginBottom:-20,

    transform:'rotate(90deg)',
    filter:'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)',
});

export default function ScrollDown(){

    const [fadeOut, setFadeOut] = useState(false);
    const [showComponent, setShowComponent] = useState(true);

    function handleScroll(){
        
        if(window.pageYOffset >= 400){

            setFadeOut(true);

            setTimeout(() => {

                setShowComponent(false);
            }, 1000);
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll, {passive:true});
    }, []);

    return(
        <>
            {showComponent &&
                <Outer fadeOut={fadeOut}>
                    <Inner>
                        <Arrow src="/images/icons/arrow_right.svg" alt="Scroll Down"></Arrow>
                        <Arrow src="/images/icons/arrow_right.svg" alt="Scroll Down"></Arrow>
                    </Inner>
                </Outer>
            }
        </>
    );
}