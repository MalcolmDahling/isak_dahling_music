import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { ReleasesScroll } from "../atoms/ReleasesScroll";
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
    checkPixelsFromTop?:boolean;
}

export default function Section(props:props){

    const [releasesScroll, setReleasesScroll] = useRecoilState(ReleasesScroll);
    const ref = useRef<any>();

    useEffect(() => { //used for ZoomEffect

        if(props.checkPixelsFromTop){

            setReleasesScroll(prev => ({...prev, 
                sectionPixelsFromTop: ref.current?.getBoundingClientRect().top + window.pageYOffset
            }));
        }

    }, [ref]);

    return(
        <StyledSection ref={ref} paddingBottom={props.paddingBottom} viewHeight100={props.viewHeight100} overflowXHidden={props.overflowXHidden} backgroundColor={props.backgroundColor}>
            {props.children}
        </StyledSection>
    );
}