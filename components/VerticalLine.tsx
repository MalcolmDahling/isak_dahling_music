import { styled } from "../stitches.config";

const Div = styled('div', {

    position:'absolute',
    top:0,
    bottom:0,
    left:33,
    zIndex:3,
    width:1,
    
    userSelect:'none',
    backgroundColor:'$white',

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


interface props{
    top?:boolean;
    bottom?:boolean;
    mixBlendModeDifference?:boolean;
}

export default function VerticalLine(props:props){

    return(
        <Div top={props.top} bottom={props.bottom} mixBlendModeDifference={props.mixBlendModeDifference}></Div>
    );
}