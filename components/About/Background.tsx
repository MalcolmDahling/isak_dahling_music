import { styled } from "../../stitches.config";

const Div = styled('div', {

    position:'relative',
    width:'100%',
    height:300,

    backgroundImage:'url(images/logo_black_small.svg)',
    backgroundRepeat:'repeat',
    backgroundPosition:'center',
    backgroundSize:75,
});

const WhiteGradient = styled('div', {

    width:'100%',
    height:'100%',

    background:'linear-gradient(180deg, rgba(255,255,255,0) 25%, rgba(255,255,255,1) 100%)',
});

const BlackGradient = styled('div', {

    position:'absolute',
    inset:0,

    background:'linear-gradient(180deg, #000000 0%, rgba(255,255,255,0) 90%)'
});

export default function Background(){

    return(
        <Div>
            <WhiteGradient></WhiteGradient>
            <BlackGradient></BlackGradient>
        </Div>
    );
}