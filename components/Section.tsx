import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { NewsScroll } from "../atoms/NewsScroll";
import { ReleasesAreLoaded } from "../atoms/ReleasesAreLoaded";
import { ReleasesScroll } from "../atoms/ReleasesScroll";
import { Songs } from "../atoms/Songs";
import { styled } from "../stitches.config";

const StyledSection = styled('section', {

    position:'relative',

    variants:{
        paddingBottom:{
            true:{
                paddingBottom:200
            }
        },
        viewHeight100:{
            true:{
                height:'100vh'
            }
        },

        overflowXHidden:{
            true:{
                overflowX:'hidden'
            }
        },

        backgroundColor:{
            white:{
                backgroundColor:'$white'
            },

            black:{
                backgroundColor:'$black'
            }
        }
    }
});

interface props{
    children:React.ReactNode;
    paddingBottom?:boolean;
    viewHeight100?:boolean;
    overflowXHidden?:boolean;
    backgroundColor:'white' | 'black';
    checkPixelsFromTop?:'releases' | 'news';
}

export default function Section(props:props){

    const [releasesScroll, setReleasesScroll] = useRecoilState(ReleasesScroll);
    const [newsScroll, setNewsScroll] = useRecoilState(NewsScroll);
    const releasesAreLoaded = useRecoilValue(ReleasesAreLoaded);
    const songs = useRecoilValue(Songs);
    const ref = useRef<any>();

    useEffect(() => { //used for ZoomEffect

        if(props.checkPixelsFromTop === 'releases'){

            setReleasesScroll(prev => ({...prev, 
                sectionPixelsFromTop: ref.current?.getBoundingClientRect().top + window.pageYOffset
            }));
        }
    }, [ref, releasesAreLoaded]);

    useEffect(() => {

        if(props.checkPixelsFromTop === 'news'){

            setNewsScroll(prev => ({...prev, 
                sectionPixelsFromTop: ref.current?.getBoundingClientRect().top + window.pageYOffset
            }));
        }
    }, [ref, releasesAreLoaded]); //setNewsScroll when songs are loaded so releases is the correct height

    return(
        <StyledSection ref={ref} paddingBottom={props.paddingBottom} viewHeight100={props.viewHeight100} overflowXHidden={props.overflowXHidden} backgroundColor={props.backgroundColor}>
            {props.children}
        </StyledSection>
    );
}