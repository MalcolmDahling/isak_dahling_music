import { useRecoilState } from "recoil";
import { ToggleContact } from "../../atoms/ToggleContact";
import { ToggleMenu } from "../../atoms/ToggleMenu";
import { keyframes, styled } from "../../stitches.config";
import ExpandingLine from "../ExpandingLine";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

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

const StyledButton = styled('button', {

    position:'relative',
    padding:0,
    paddingBottom:10,
    paddingLeft:20,
    marginTop:-9,
    width:'0%',

    cursor:'pointer',
    textAlign:'start',
    backgroundColor:'transparent',
    border:'none',
    borderBottom:'1px solid $whiteHalfOpacity',
    fontSize:50,
    color:'$white',
    textDecoration:'none',
    transition:'all 500ms',
    animation:`${MoveRight} 1000ms forwards`,
    opacity:0,

    '&:hover, &:focus':{
        color:'$white !important'
    },

    '&:hover div, &:focus div':{
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

interface props{
    url:string;
    animationDelay:0|1|2|3|4;
    option:string;
}

export default function MenuLink(props:props){

    const [toggleMenu, setToggleMenu] = useRecoilState(ToggleMenu);
    const [toggleContact, setToggleContact] = useRecoilState(ToggleContact);

    function handleClick(option:string){

        setToggleMenu(false);

        setTimeout(() => {

            if(option === 'CONTACT'){

                setToggleContact(true);
            }

            else{
                // window.location.href=`#${option}`;
                
                scroller.scrollTo(option, {duration:1000, smooth:true})
            }
        }, 500);
    }

    return(

        <StyledButton animationDelay={props.animationDelay} onClick={() => {handleClick(props.option)}}>
            {props.option}
            <ExpandingLine position="bottom"></ExpandingLine>
        </StyledButton>
    );
}