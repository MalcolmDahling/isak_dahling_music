import Link from "next/link";
import { keyframes, styled } from "../../stitches.config";

const MoveRight = keyframes({

    '0%':{
        width:'0%',
        opacity:0
    },
    '100%':{
        width:'100%',
        opacity:1
    }
});

const StyledLink = styled(Link, {

    position:'relative',
    paddingBottom:10,
    paddingLeft:20,
    marginTop:-10,
    width:'0%',

    borderBottom:'1px solid $whiteHalfOpacity',
    fontSize:50,
    color:'$white',
    textDecoration:'none',
    transition:'all 500ms',
    animation:`${MoveRight} 1000ms forwards`,
    opacity:0,

    '&:hover':{
        color:'$white !important'
    },

    '&:hover div':{
        width:'100%'
    },

    '@tablet':{
        paddingBottom:0,
        fontSize:35,
    },

    variants:{
        animationDelay:{
            0:{
                animationDelay:'400ms',
            },

            1:{
                animationDelay:'600ms',
            },

            2:{
                animationDelay:'800ms',
            },

            3:{
                animationDelay:'1000ms',
            },

            4:{
                animationDelay:'1200ms',
            }
        }
    }
});

const ExpandingLine = styled('div', {

    position:'absolute',
    bottom:-1,
    left:0,
    height:1,
    width:0,
    transition:'all 500ms',
    
    backgroundColor:'$white'
});

interface props{
    url:string;
    animationDelay:0|1|2|3|4;
    option:string;
}

export default function MenuLink(props:props){

    return(

        <StyledLink href={props.url} animationDelay={props.animationDelay}>
            {props.option}
            <ExpandingLine></ExpandingLine>
        </StyledLink>
    );
}