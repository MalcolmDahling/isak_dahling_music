import { keyframes, styled } from "../stitches.config";

const FadeInText = keyframes({

    '0%':{
        filter:'blur(12px)',
        opacity:0
    },

    '100%':{
        filter:'blur(0)',
        opacity:1
    }
});

const ExtendLine = keyframes({

    '0%':{
        width:'0%'
    },

    '100%':{
        width:'100%'
    }
});

const FadeOutTextAndLine = keyframes({

    '0%':{
        filter:'blur(0)',
        opacity:1
    },

    '100%':{
        filter:'blur(12px)',
        opacity:0
    }
});

const FadeOutBackground = keyframes({

    '0%':{
        opacity:1
    },

    '100%':{
        opacity:0
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
    animationDelay:'4000ms',

    '@tablet':{
        padding:10
    }
});

const Div = styled('div', {

    width:'100%',
    maxWidth:1300,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:20,

    animation:`${FadeOutTextAndLine} 1000ms cubic-bezier(.55,.085,.68,.53) forwards`,
    animationDelay:'4000ms',

    '@tablet':{
        gap:10
    }
});

const H1 = styled('h1', {

    userSelect:'none',
    opacity:0,
    fontSize:'calc(15px + 3vw)',
    whiteSpace:'nowrap',
    
    animation:`${FadeInText} 1500ms cubic-bezier(.55,.085,.68,.53) forwards`,
    animationDelay:'500ms'
});

const Line = styled('div', {

    width:'0%',
    height:'0.6vw',

    backgroundColor:'$white',

    animation:`${ExtendLine} 2000ms ease-in-out forwards`,
    animationDelay:'2000ms'
});

export default function Intro(){

    return(
        <Background>
            <Div>
                <Line></Line>
                <H1>ISAK DAHLING MUSIC</H1>
                <Line></Line>
            </Div>
        </Background>
    );
}