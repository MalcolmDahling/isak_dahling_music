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
    
    backgroundColor:'rgba(0,0,0,0.5)',
    
    mask:'url(/images/note.svg), linear-gradient(#fff 0 0)',
    '-webkit-mask':'url(/images/note.svg), linear-gradient(#fff 0 0)',

    maskRepeat:'no-repeat',
    '-webkit-mask-repeat':'no-repeat',

    maskPosition:'50%, 50%',
    '-webkit-mask-position':'50%, 50%',

    maskSize:'100%',
    '-webkit-mask-size':'100%',

    maskComposite:'destination-out',
    '-webkit-mask-composite':'destination-out',
});



export default function ZoomEffect(){

    const [prevScroll, setPrevScroll] = useState(0);
    const [maskSize, setMaskSize] = useState(100);
    const releasesInView = useRecoilValue(ReleasesInView);

    function handleScroll(){
            
        if(releasesInView && window.pageYOffset > prevScroll){ //if scrolling down

            setMaskSize(maskSize + 500);
        }

        // if(releasesInView && prevScroll > window.pageYOffset){ //if scrolling up

        //     setMaskSize(maskSize - 500);
        // }

        setPrevScroll(window.pageYOffset);
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return(() => {

            window.removeEventListener('scroll', handleScroll);
        });
    }, [releasesInView]);

    return(
        <>
            <Div style={{maskSize:maskSize+'%', WebkitMaskSize:maskSize+'%'}}>

            </Div>
        </>
    );
}