import { useRef } from "react";
import { styled } from "../stitches.config";

const Div = styled('div', {

    position:'absolute',
    left:20,
    top:20,
    bottom:20,
    zIndex:1,

    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:20,
});

const H1 = styled('h1', {

    margin:0,
    transform:'rotate(-90deg)',
    whiteSpace:'nowrap'
});

const H2 = styled('h1', {

    margin:0,
    transform:'rotate(-90deg)',
});

const Line = styled('div', {

    flexGrow:1,

    width:1,
    backgroundColor:'$white',
});


interface props{
    textElement:string;
    text:string;
}

export default function VerticalLine(props:props){

    const ref = useRef<any>();

    return(
        <Div>
            {props.textElement === "h1" ?
                <H1 ref={ref} style={{height: ref.current?.offsetWidth}}>{props.text}</H1> : <H2>{props.text}</H2>
            }
            <Line style={{marginLeft: - ref.current?.offsetWidth + 24 /*24 is font size*/}}></Line>
        </Div>
    );
}