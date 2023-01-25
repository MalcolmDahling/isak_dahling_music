import { useRef } from "react";
import { styled } from "../stitches.config";

const Div = styled('div', {

    position:'absolute',
    top:0,
    bottom:0,
    left:33,
    zIndex:2,

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
    },

    '@mobile':{
        display:'none'
    }
});

const Line = styled('div', {
    
    position:'absolute',
    top:0,
    left:0,
    bottom:0,

    width:1,
    backgroundColor:'$white',
});

const HideLine = styled('div', {

    position:'sticky',
    top:50,

    width:1,
    backroundColor:'$black',
    border:'1px solid red'
});

const P = styled('p', {
    
    margin:0,
    marginLeft:-12,

    
    transform:'rotate(-90deg)',
    whiteSpace:'nowrap',
    fontSize:24,
    fontWeight:'bold',
    color:'$white',
});

interface props{
    text:string;
    top?:boolean;
    bottom?:boolean;
    mixBlendModeDifference?:boolean;
}

export default function VerticalLine2(props:props){

    const ref = useRef<any>();

    return(
        <Div top={props.top} bottom={props.bottom} mixBlendModeDifference={props.mixBlendModeDifference}>
            <Line></Line>

            <HideLine>
                <P ref={ref} style={{height: ref.current?.offsetWidth}}>{props.text}</P>
            </HideLine>
        </Div>
    );
}