import { useRef } from "react";
import { useBreakpoint } from "use-breakpoint";
import { styled } from "../stitches.config";
import { BREAKPOINTS } from "../variables/breakpoints";

const Outer = styled('div', {

    position:'absolute',
    inset:0,
    
});

const StickyContainer = styled('div', {

    position:'sticky',
    margin:0,
    marginLeft:-4,
    paddingRight:20,
    paddingLeft:20,
    zIndex:3,
    width:'fit-content',

    display:'flex',
    justifyContent:'center',
    alignItems:'center',

    transform:'rotate(-90deg)',
    transformOrigin:'top left',
    mixBlendMode:'difference',
});

const P = styled('p', {

    position:'relative',

    whiteSpace:'nowrap',
    fontSize:24,
    fontWeight:'bold',
    userSelect:'none',
});

const LineDiv = styled('div', {

    position:'absolute',
    top:37,
    left:0,
    width:'100%',
    height:1,

    mixBlendMode:'difference',
});

const HideLine = styled('div', {

    width:'100%',
    height:'100%',
    backdropFilter:'invert(100%)',
    backgroundColor:'white'
});

interface props{
    text:string;
    marginTop?:number;
    fixedColor:'black' | 'white' | false;
}

export default function StickyText(props:props){

    const ref = useRef<any>();
    const {breakpoint} = useBreakpoint(BREAKPOINTS, 'desktop');

    return(
        <>
            {breakpoint !== 'mobile' &&
                <Outer>
                    <StickyContainer ref={ref} style={{top:`calc(50% + ${ref.current?.offsetWidth / 2}px)` || 0, marginTop: props.marginTop || 0}}>

                        <P>{props.text}</P>
                        
                        <LineDiv>
                            <HideLine></HideLine>
                        </LineDiv>

                    </StickyContainer>
                </Outer>
            }
        </>
    );
}