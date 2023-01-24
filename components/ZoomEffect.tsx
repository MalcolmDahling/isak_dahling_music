import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useBreakpoint } from "use-breakpoint";
import { ComponentInView } from "../atoms/ComponentInView";
import { styled } from "../stitches.config";
import { BREAKPOINTS } from "../variables/breakpoints";

const Blur = styled('div', {

    position:'sticky',
    top:0,
    left:0,
    right:0,
    width:'100%',
    height:'100vh',
    zIndex:1,

    transition:'all 350ms ease-in-out',

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

    transition:'all 350ms ease-in-out',

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

interface props{
    category:'releases' | 'news';
    backgroundColor:'black' | 'white';
}

export default function ZoomEffect(props:props){
    
    const [componentInView, setComponentInView] = useRecoilState(ComponentInView);
    const {breakpoint} = useBreakpoint(BREAKPOINTS, 'desktop');
    const [maskSizes, setMaskSizes] = useState<number[]>([])
    const blurSizes = [0, 3, 6, 9, 12];
    const [currentSize, setCurrentSize] = useState(0);

    useEffect(() => {
        
        if(breakpoint === 'desktop'){
            setComponentInView(prev => ({...prev, threshold: [0, 0.1, 0.2, 0.3, 0.4]}));
            
            setMaskSizes([100, 500, 1000, 1500, 4000]);
        }
        else{
            setComponentInView(prev => ({...prev, threshold: [0, 0.05, 0.1, 0.15, 0.2]}));
            setMaskSizes([100, 500, 1500, 5000, 10000]);
        }

    }, [breakpoint]);

    useEffect(() => {

        if(props.category === 'releases'){

            for(let i = 0; i < componentInView.threshold.length; i++){

                if(componentInView.releases >= componentInView.threshold[i]){
                    setCurrentSize(i);
                }
            }
        }

        if(props.category === 'news'){

            for(let i = 0; i < componentInView.threshold.length; i++){

                if(componentInView.news >= componentInView.threshold[i]){
                    setCurrentSize(i);
                }
            }
        }
        
    }, [componentInView]);

    return(
        <Blur >
            <Div backgroundColor={props.backgroundColor} style={{maskSize:maskSizes[currentSize] + 'vw', WebkitMaskSize:maskSizes[currentSize] + 'vw'}}>
            
            </Div>
        </Blur>
    );
}