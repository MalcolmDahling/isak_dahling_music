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
    opacity:0.5
});



export default function ZoomEffect(){

    const [maskSize, setMaskSize] = useState(100);
    const releasesScroll = useRecoilValue(ReleasesScroll);
    const releasesInView = useRecoilValue(ReleasesInView);

    const stages = [100, 200, 500, 1000, 1500, 2000, 3000, 4500, 6000, 10000];

    // useEffect(() => {

    //     // console.log(releasesScroll.pixelsFromTop / releasesScroll.height);
    //     // console.log(releasesScroll);

    //     if(releasesScroll.pixelsFromTop / releasesScroll.height <= 0.1){
    //         setMaskSize(stages[0]);
    //     }

    //     for(let i = 1; i < stages.length; i++){

    //         if(releasesScroll.pixelsFromTop / releasesScroll.height > i / 10){

    //             setMaskSize(stages[i]);
    //         }
    //     }
    // }, [releasesScroll]);

    const [prevScroll, setPrevScroll] = useState(0);
    const [count, setCount] = useState(0);

    function handleScroll(){

        if(releasesInView){

            if(window.pageYOffset > prevScroll){ //if scrolling down

                if(count < 100){
    
                    setCount(count + 1);
                }
            }
            
            else{
    
                if(count > 0){
    
                    setCount(count - 1);
                }
            }
        }

        

        console.log(count, releasesInView);

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