import { useState } from "react";
import { useRecoilValue } from "recoil";
import { NewsInView } from "../atoms/NewsInView";
import { ReleasesInView } from "../atoms/ReleasesInView";
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
    },
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
    }
});

interface props{
    category:'releases' | 'news';
    backgroundColor:'black' | 'white';
}

export default function ZoomEffect(props:props){
    
    const maskSizes:number[] = [100, 200, 500, 1000, 1500, 2000, 3000, 4500, 6000, 15000];
    const [prevScroll, setPrevScroll] = useState(0);
    const releasesInView = useRecoilValue(ReleasesInView);
    const newsInView = useRecoilValue(NewsInView);
    
    return(
        <Blur blur={props.category === 'releases' ? releasesInView.inView : newsInView.inView}>
            <Div maskSize={props.category === 'releases' ? releasesInView.inView : newsInView.inView} backgroundColor={props.backgroundColor}>
            
            </Div>
        </Blur>
    );
}