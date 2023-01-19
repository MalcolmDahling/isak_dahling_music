import { keyframes, styled } from "../stitches.config";
import Left from "../public/images/animLogo/left.svg";
import Right from "../public/images/animLogo/right.svg";

const FadeOutBackground = keyframes({

    '0%':{
        opacity:1
    },

    '100%':{
        opacity:0
    }
});

const StrokeAnimLeft = keyframes({
    '100%':{
        strokeDashoffset:0,
    }
});

const StrokeAnimRight = keyframes({
    '100%':{
        strokeDashoffset:0,
    }
});

const FillAnim = keyframes({
    '100%':{
        fill:'$white'
    }
})

const TextAnim = keyframes({

    '0%':{
        opacity:0
    },

    '100%':{
        opacity:1
    }
});

const Background = styled('div', {

    position:'fixed',
    top:0,
    bottom:0,
    left:0,
    right:0,
    zIndex:100,
    padding:20,

    display:'flex',
    justifyContent:'center',
    alignItems:'center',

    backgroundColor:'$black',

    animation:`${FadeOutBackground} 1000ms forwards`,
    animationDelay:'6500ms',
});

const Div = styled('div', {

    display:'flex',
    flexDirection:'column',
    alignItems:'center'
});

const LogoContainer = styled('div', {

    display:'flex',
});

const LogoLeft = styled(Left, {

    width:'30vw',
    marginRight:'-29.9vw',

    fill:'transparent',
    stroke:'#FFFFFF',
    strokeDasharray:1000,
    strokeDashoffset:1000,
    animation:`${StrokeAnimLeft} 3000ms 500ms linear forwards, ${FillAnim} 2000ms 3500ms forwards`,

    '@tablet':{
        width:'50vw',
        marginRight:'-50vw',
    }
});

const LogoRight = styled(Right, {

    width:'30vw',

    fill:'transparent',
    stroke:'#FFFFFF',
    strokeDasharray:1800,
    strokeDashoffset:1800,
    animation:`${StrokeAnimRight} 3000ms 500ms linear forwards, ${FillAnim} 2000ms 3500ms forwards`,

    '@tablet':{
        width:'50vw',
    }
});

const H1 = styled('h1', {

    margin:0,
    marginTop:'-3vw',

    opacity:0,
    userSelect:'none',
    fontSize:'calc(15px + 3vw)',
    whiteSpace:'nowrap',
    animation:`${TextAnim} 2000ms 3500ms forwards`
});

export default function Intro(){

    return(
        <Background>
            <Div>
                <LogoContainer>
                    <LogoLeft></LogoLeft>
                    <LogoRight></LogoRight>
                </LogoContainer>

                <H1>ISAK DAHLING MUSIC</H1>
            </Div>
        </Background>
    );
}