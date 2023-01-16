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

        // if(releasesPercentageVisible > 0 && releasesPercentageVisible < 5){

        //     setMaskSize(200);
        // }

        // if(releasesPercentageVisible > 5 && releasesPercentageVisible < 10){

        //     setMaskSize(400);
        // }

        // if(releasesPercentageVisible > 10 && releasesPercentageVisible < 20){

        //     setMaskSize(500);
        // }

        // if(releasesPercentageVisible > 20 && releasesPercentageVisible < 30){

        //     setMaskSize(1000);
        // }

        // if(releasesPercentageVisible > 30 && releasesPercentageVisible < 40){

        //     setMaskSize(1500);
        // }

        // if(releasesPercentageVisible > 40 && releasesPercentageVisible < 50){

        //     setMaskSize(2000);
        // }

        // if(releasesPercentageVisible > 50 && releasesPercentageVisible < 60){

        //     setMaskSize(2500);
        // }

        // if(releasesPercentageVisible > 60 && releasesPercentageVisible < 70){

        //     setMaskSize(3000);
        // }

        // if(releasesPercentageVisible > 70 && releasesPercentageVisible < 80){

        //     setMaskSize(3500);
        // }

        // if(releasesPercentageVisible > 80 && releasesPercentageVisible < 90){

        //     setMaskSize(4000);
        // }

        // if(releasesPercentageVisible > 90 && releasesPercentageVisible < 100){

        //     setMaskSize(4500);
        // }

        // if(releasesPercentageVisible >= 100){

        //     setMaskSize(10000);
        // }


        for(let i = 1; i < 101; i++){

            if(i === releasesPercentageVisible){

                if(i === 1){

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
        <>
            <Div style={{maskSize: maskSize + 'vw', WebkitMaskSize: maskSize + 'vw'}}>

            </Div>
        </>
    );
}