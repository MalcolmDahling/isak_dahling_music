import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ReleasesInView } from "../../atoms/ReleasesInView";
import { styled } from "../../stitches.config";

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

    const [prevScroll, setPrevScroll] = useState(0);
    const [maskSize, setMaskSize] = useState(100);
    const [stage, setStage] = useState(0);
    const releasesInView = useRecoilValue(ReleasesInView);

    function handleScroll(){
        
        if(releasesInView){

            if(window.pageYOffset > prevScroll){ //if scrolling down

                if(stage === 0){

                    setMaskSize(maskSize + 150);
                }

                if(stage === 1){

                    setMaskSize(maskSize + 500);
                }

                if(stage >= 2){
                    
                    setMaskSize(maskSize + 1000);
                }

                setStage(stage + 1);
            }


            if(prevScroll > window.pageYOffset && stage > 0){

                if(stage > 2){

                    setMaskSize(maskSize - 1000);
                }

                if(stage === 2){
                    setMaskSize(maskSize - 500);
                }

                if(stage === 1){
                    setMaskSize(maskSize - 150);
                }

                setStage(stage - 1);
            }

            console.log('maskSize', maskSize, 'stage', stage, 'prevScroll');
        }

        setPrevScroll(window.pageYOffset);
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return(() => {

            window.removeEventListener('scroll', handleScroll);
        });
    }, [releasesInView, prevScroll]);

    return(
        <>
            <Div style={{maskSize: maskSize + '%', WebkitMaskSize: maskSize + '%'}}>

            </Div>
        </>
    );
}