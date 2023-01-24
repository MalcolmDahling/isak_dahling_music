import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { ComponentInView } from "../atoms/ComponentInView";
import { styled } from "../stitches.config";

const Div = styled('div', {

    position:'absolute',
    inset:0,

    pointerEvents:'none',
    
    mask:'url(/images/logo.svg), linear-gradient(#fff 0 0)',
    '-webkit-mask':'url(/images/logo.svg), linear-gradient(#fff 0 0)',

    maskRepeat:'no-repeat',
    '-webkit-mask-repeat':'no-repeat',

    maskPosition:'50% 53%',
    '-webkit-mask-position':'50% 53%',

    maskComposite:'exclude',
    '-webkit-mask-composite':'destination-out',

    transition:'all 750ms ease-in-out',

    variants:{
        backgroundColor:{
            black:{
                backgroundColor:'$black',
            },
            white:{
                backgroundColor:'$white',
            }
        },

        maskSize:{
            true:{
                maskSize:'4000vh',
                WebkitMaskSize:'4000vh',
            },
            false:{
                maskSize:'100vw',
                WebkitMaskSize:'100vw',
            }
        }
    }
});

const Blur = styled('div', {

    position:'sticky',
    top:0,
    left:0,
    right:0,
    width:'100%',
    height:'100vh',
    zIndex:1,

    transition:'all 750ms ease-in-out',

    variants:{
        blur:{
            true:{
                backdropFilter:'blur(0px)',
            },
            false:{
                backdropFilter:'blur(12px)'
            }
        }
    },

    opacity:0.5
});

interface props{
    category:'releases' | 'news';
    backgroundColor:'black' | 'white';
}

export default function ZoomEffect(props:props){
    
    const componentInView = useRecoilValue(ComponentInView);
    
    return(
        <Blur blur={props.category === 'releases' ? componentInView.releases : componentInView.news}>
            <Div backgroundColor={props.backgroundColor} maskSize={props.category === 'releases' ? componentInView.releases : componentInView.news}>
            
            </Div>
        </Blur>
    );
}