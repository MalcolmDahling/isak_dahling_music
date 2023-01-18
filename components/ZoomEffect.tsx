import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ReleasesInView } from "../atoms/ReleasesInView";
import { ReleasesScroll } from "../atoms/ReleasesScroll";
import { styled } from "../stitches.config";

const Div = styled('div', {

    position:'sticky',
    top:0,
    left:0,
    right:0,
    width:'100%',
    height:'100vh',
    zIndex:1,
    
    backgroundColor:'$black',
    pointerEvents:'none',
    
    mask:'url(/images/logo.svg), linear-gradient(#fff 0 0)',
    '-webkit-mask':'url(/images/logo.svg), linear-gradient(#fff 0 0)',

    maskRepeat:'no-repeat',
    '-webkit-mask-repeat':'no-repeat',

    maskPosition:'50% 53%',
    '-webkit-mask-position':'50% 53%',

    // maskSize:'100%',
    // '-webkit-mask-size':'100%',

    maskComposite:'destination-out',
    '-webkit-mask-composite':'destination-out',

    transition:'all 350ms',
});



export default function ZoomEffect(){

    const [maskSize, setMaskSize] = useState(100);
    const releasesScroll = useRecoilValue(ReleasesScroll);
    
    const maskSizes = [100, 200, 500, 1000, 1500, 2000, 3000, 4500, 6000, 10000]; //make new maskSizes for mobile, maybe

    // const releasesInView = useRecoilValue(ReleasesInView);
    // useEffect(() => {

    //     // console.log(releasesScroll.pixelsFromTop / releasesScroll.height);
    //     // console.log(releasesScroll);

    //     if(releasesScroll.pixelsFromTop / releasesScroll.height <= 0.1){
    //         setMaskSize(maskSizes[0]);
    //     }

    //     for(let i = 1; i < maskSizes.length; i++){

    //         if(releasesScroll.pixelsFromTop / releasesScroll.height > i / 10){

    //             setMaskSize(maskSizes[i]);
    //         }
    //     }
    // }, [releasesScroll]);

    const [prevScroll, setPrevScroll] = useState(0);

    function handleScroll(){

        for(let i = 0; i < maskSizes.length; i++){

            if(window.pageYOffset - releasesScroll.sectionPixelsFromTop < (releasesScroll.releasesPixelsFromTop - releasesScroll.sectionPixelsFromTop) / maskSizes.length * i + 50){ //+50 makes it start a little lower so you can see the logo at its smallest for a little bit.

                setMaskSize(maskSizes[i])
                break;
            }
        }

        setPrevScroll(window.pageYOffset);
        window.removeEventListener('scroll', handleScroll);
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
    }, [prevScroll]);

    return(
            <Div style={{maskSize: maskSize + 'vw', WebkitMaskSize: maskSize + 'vw'}}>

            </Div>
    );
}