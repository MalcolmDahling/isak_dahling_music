import { styled } from "../stitches.config";

const LineContainer = styled('button', {

    position:'absolute',
    top:0,
    right:0,
    width:35,
    height:35,

    border:'none',
    backgroundColor:'transparent',
    cursor:'pointer',
    transition:'all 250ms',
    opacity:0.75,

    '&:hover, &:focus':{

        opacity:1
    },

    '@tablet':{
        top:30,
        right:30,
    }
});

const Line = styled('div', {

    position:'absolute',
    top:'50%',
    left:'50%',
    translate:'-50% -50%',

    width:44.86,
    height:5,

    backgroundColor:'$white',
    borderRadius:10,

    variants:{
        rotate:{
            left:{
                transform:'rotate(-45deg)'
            },

            right:{
                transform:'rotate(45deg)'
            }
        }
    }
});

type props = {

    close: () => void;
}

export default function ExitButton(props:props){


    return(
        <LineContainer onClick={props.close}>
            <Line rotate={'right'}></Line>
            <Line rotate={'left'}></Line>
        </LineContainer>
    );
}