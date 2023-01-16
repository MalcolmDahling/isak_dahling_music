import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ReleasesPercentageVisible } from "../atoms/ReleasesPercentageVisible";
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

    transition:'all 350ms'
});



export default function ZoomEffect(){

    const [maskSize, setMaskSize] = useState(100);
    const releasesPercentageVisible = useRecoilValue(ReleasesPercentageVisible);

    const stages = [100, 500, 1500, 3000, 10000];

    useEffect(() => {

        if(releasesPercentageVisible < 10){

            setMaskSize(stages[0]);
        }

        if(releasesPercentageVisible > 10 && releasesPercentageVisible < 20){

            setMaskSize(stages[1]);
        }

        if(releasesPercentageVisible > 20 && releasesPercentageVisible < 30){

            setMaskSize(stages[2]);
        }

        if(releasesPercentageVisible > 30 && releasesPercentageVisible < 40){

            setMaskSize(stages[3]);
        }

        if(releasesPercentageVisible > 40 && releasesPercentageVisible < 50){

            setMaskSize(stages[4]);
        }
        
        console.log(releasesPercentageVisible);
        
    },[releasesPercentageVisible]);

    return(
            <Div style={{maskSize: maskSize + 'vw', WebkitMaskSize: maskSize + 'vw'}}>

            </Div>
    );
}