import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { NewsScroll } from "../atoms/NewsScroll";
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

    pointerEvents:'none',
    
    mask:'url(/images/logo.svg), linear-gradient(#fff 0 0)',
    '-webkit-mask':'url(/images/logo.svg), linear-gradient(#fff 0 0)',

    maskRepeat:'no-repeat',
    '-webkit-mask-repeat':'no-repeat',

    maskPosition:'50% 53%',
    '-webkit-mask-position':'50% 53%',

    maskComposite:'exclude',
    '-webkit-mask-composite':'destination-out',

    transition:'all 350ms',

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

    const releasesScroll = useRecoilValue(ReleasesScroll);
    const newsScroll = useRecoilValue(NewsScroll);
    
    const [maskSize, setMaskSize] = useState(100);
    const maskSizes:number[] = [100, 200, 500, 1000, 1500, 2000, 3000, 4500, 6000, 15000];
    const [prevScroll, setPrevScroll] = useState(0);
    

    function handleScroll(){

        if(props.category === 'releases'){

            for(let i = 0; i < maskSizes.length; i++){

                if(window.pageYOffset - releasesScroll.sectionPixelsFromTop < (releasesScroll.releasesPixelsFromTop - releasesScroll.sectionPixelsFromTop) / maskSizes.length * i + 50){ //+50 makes it start a little lower so you can see the logo at its smallest for a little bit.
     
                    setMaskSize(maskSizes[i]);
                    break;
                }
            }
        }

        else if(props.category === 'news'){

            for(let i = 0; i < maskSizes.length; i++){

                if(window.pageYOffset - newsScroll.sectionPixelsFromTop < (newsScroll.newsPixelsFromTop - newsScroll.sectionPixelsFromTop) / maskSizes.length * i + 50){ //+50 makes it start a little lower so you can see the logo at its smallest for a little bit.
     
                    setMaskSize(maskSizes[i]);
                    break;
                }
            }
        }

        setPrevScroll(window.pageYOffset);
        window.removeEventListener('scroll', handleScroll);
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
    }, [prevScroll]);

    return(
        <Div style={{maskSize: maskSize + 'vw', WebkitMaskSize: maskSize + 'vw'}} backgroundColor={props.backgroundColor}>

        </Div>
    );
}