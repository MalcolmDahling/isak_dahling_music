import { styled } from "../stitches.config";

const Div = styled('div', {

    position:'absolute',
    inset:0,

    opacity:0.10,
    zIndex:-1,

    backgroundImage:'url(/images/hexagon.svg)',
    backgroundSize:'58px 100.230px',
    boxShadow:'inset 0 0 400px 200px black',

    '@tablet':{
        boxShadow:'inset 0 0 400px 100px black',
    },

    '@mobile':{
        opacity:0.3
    }
});


export default function SvgBackground(){

    return(
        <Div></Div>
    );
}