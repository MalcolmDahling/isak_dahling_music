import { useRef } from "react";
import { styled } from "../stitches.config";

const Div = styled('div', {

    position:'absolute',
    top:0,
    bottom:0,
    left:20,
    zIndex:1,

    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:10,

    userSelect:'none',
    mixBlendMode:'difference'
,
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
        }
    }
});

const H1 = styled('h1', {

    margin:0,

    transform:'rotate(-90deg)',
    whiteSpace:'nowrap',
    fontSize:24,
    color:'$white'
});

const H2 = styled('h1', {

    margin:0,
    
    transform:'rotate(-90deg)',
    whiteSpace:'nowrap',
    fontSize:24,
    color:'$white'
});

const Line = styled('div', {

    flexGrow:1,

    width:1,
    backgroundColor:'$white',
});


interface props{
    textElement:string;
    text:string;
    top?:boolean;
    bottom?:boolean;
}

export default function VerticalLine(props:props){

    const ref = useRef<any>();

    return(
        <Div top={props.top} bottom={props.bottom}>

            <Line style={{marginLeft: - ref.current?.offsetWidth + 26 || 0 /*26 is font size(24) + 2*/}}></Line>

            {props.textElement === "h1" && <H1 ref={ref} style={{height: ref.current?.offsetWidth}}>{props.text}</H1>}
            {props.textElement === "h2" && <H2 ref={ref} style={{height: ref.current?.offsetWidth}}>{props.text}</H2>} 

            <Line style={{marginLeft: - ref.current?.offsetWidth + 26 || 0 /*26 is font size(24) + 2*/}}></Line>
        </Div>
    );
}