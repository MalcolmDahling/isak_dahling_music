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
});



export default function ZoomEffect(){

    const [maskSize, setMaskSize] = useState(100);
    const releasesPercentageVisible = useRecoilValue(ReleasesPercentageVisible);


    useEffect(() => {

        for(let i = 0; i < 100; i++){

            if(i === releasesPercentageVisible){

                if(i <= 0){

                    setMaskSize(100);
                }

                else{

                    setMaskSize(i * 75);
                }  
            }
        }
        
        console.log(releasesPercentageVisible);
        
    },[releasesPercentageVisible]);

    return(
            <Div style={{maskSize: maskSize + 'vw', WebkitMaskSize: maskSize + 'vw'}}>

            </Div>
    );
}