import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
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
    
    mask:'url(/images/note.svg), linear-gradient(#fff 0 0)',
    '-webkit-mask':'url(/images/note.svg), linear-gradient(#fff 0 0)',

    maskRepeat:'no-repeat',
    '-webkit-mask-repeat':'no-repeat',

    maskPosition:'50.85%, 50%',
    '-webkit-mask-position':'50.85%, 50%',

    // maskSize:'100%',
    // '-webkit-mask-size':'100%',

    maskComposite:'destination-out',
    '-webkit-mask-composite':'destination-out',

    transition:'all 350ms',
});



export default function ZoomEffect(){

    const [maskSize, setMaskSize] = useState(100);
    const releasesScroll = useRecoilValue(ReleasesScroll);

    const stages = [100, 200, 500, 1000, 1500, 2000, 3000, 4500, 6000, 10000];

    useEffect(() => {

        // console.log(releasesScroll.pixelsFromTop / releasesScroll.height);
        // console.log(releasesScroll);


        if(releasesScroll.pixelsFromTop / releasesScroll.height < 0){
            setMaskSize(stages[0]);
        }

        if(releasesScroll.pixelsFromTop / releasesScroll.height > 0.1){
            setMaskSize(stages[1]);
        }

        if(releasesScroll.pixelsFromTop / releasesScroll.height > 0.2){
            setMaskSize(stages[2]);
        }

        if(releasesScroll.pixelsFromTop / releasesScroll.height > 0.3){
            setMaskSize(stages[3]);
        }

        if(releasesScroll.pixelsFromTop / releasesScroll.height > 0.4){
            setMaskSize(stages[4]);
        }

        if(releasesScroll.pixelsFromTop / releasesScroll.height > 0.5){
            setMaskSize(stages[5]);
        }

        if(releasesScroll.pixelsFromTop / releasesScroll.height > 0.6){
            setMaskSize(stages[6]);
        }

        if(releasesScroll.pixelsFromTop / releasesScroll.height > 0.7){
            setMaskSize(stages[7]);
        }

        if(releasesScroll.pixelsFromTop / releasesScroll.height > 0.8){
            setMaskSize(stages[8]);
        }
        
        if(releasesScroll.pixelsFromTop / releasesScroll.height > 1){
            setMaskSize(stages[9]);
        }
    }, [releasesScroll])

    return(
            <Div style={{maskSize: maskSize + 'vw', WebkitMaskSize: maskSize + 'vw'}}>

            </Div>
    );
}