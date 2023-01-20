import { useRef } from "react";
import { styled } from "../stitches.config";

const Div = styled('div', {

    position:'absolute',
    top:0,
    bottom:0,
    left:20,
    zIndex:2,

    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:10,

    userSelect:'none',

    variants:{
        top:{
            true:{
                top:35,
            }
        },
        bottom:{
            true:{
                bottom:35,
            }
        },
        mixBlendModeDifference:{
            true:{
                mixBlendMode:'difference',
            }
        }
    }
});

const P = styled('p', {

    margin:0,

    transform:'rotate(-90deg)',
    whiteSpace:'nowrap',
    fontSize:24,
    fontWeight:'bold',
    color:'$white'
});

const Line = styled('div', {

    flexGrow:1,

    width:1,
    backgroundColor:'$white',
});


interface props{
    text:string;
    top?:boolean;
    bottom?:boolean;
    mixBlendModeDifference?:boolean;
    breakpoint:'mobile' | 'tablet' | 'desktop';
}

export default function VerticalLine(props:props){

    const ref = useRef<any>();

    return(
        <>
            {props.breakpoint !== 'mobile' &&
                <Div top={props.top} bottom={props.bottom} mixBlendModeDifference={props.mixBlendModeDifference}>
                    <Line style={{marginLeft: - ref.current?.offsetWidth + 26 || 0 /*26 is font size(24) + 2*/}}></Line>
                    <P ref={ref} style={{height: ref.current?.offsetWidth}}>{props.text}</P>
                    <Line style={{marginLeft: - ref.current?.offsetWidth + 26 || 0 /*26 is font size(24) + 2*/}}></Line>
                </Div>
            }
        </>
    );
}