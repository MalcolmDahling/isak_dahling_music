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
    zIndex:2,

    transition:'all 350ms ease-in-out',
    pointerEvents:'none',

    variants:{
        blur:{
            true:{
                backdropFilter:'blur(0px)',
                '-webkit-backdrop-filter':'blur(0px)'
            },
            false:{
                backdropFilter:'blur(12px)',
                '-webkit-backdrop-filter':'blur(12px)'
            }
        }
    }
});

const Div = styled('div', {

    position:'absolute',
    inset:0,

    pointerEvents:'none',
    
    mask:'url(/images/logo/logo.svg), linear-gradient(#fff 0 0)',
    '-webkit-mask':'url(/images/logo/logo.svg), linear-gradient(#fff 0 0)',

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
    const [blurSizes, setBlurSizes] = useState<number[]>([]);
    const [currentSize, setCurrentSize] = useState(0);

    useEffect(() => {
        
        if(breakpoint === 'desktop'){
        
            setComponentInView(prev => ({...prev, threshold: [0, 0.2, 0.4, 0.6, 0.8, 1]}));
            setMaskSizes([100, 300, 800, 1200, 3000, 10000]);
            setBlurSizes([12, 9, 4, 2, 0, 0]);
        }
        else{

            setComponentInView(prev => ({...prev, threshold: [0, 0.1, 0.2, 0.3, 0.35, 0.4]}));
            setMaskSizes([200, 500, 1500, 3000, 6000, 10000]);
            setBlurSizes([12, 9, 4, 2, 0, 0]);
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
        <Blur style={{backdropFilter:`blur(${blurSizes[currentSize]}px)`, WebkitBackdropFilter:`blur(${blurSizes[currentSize]}px)`}}>
            <Div backgroundColor={props.backgroundColor} style={{maskSize:maskSizes[currentSize] + 'vw', WebkitMaskSize:maskSizes[currentSize] + 'vw'}}></Div>
        </Blur>
    );
}