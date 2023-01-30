import { styled } from "../stitches.config";

const Div = styled('div', {

    position:'absolute',
    bottom:-1,
    left:0,
    height:1,
    width:0,
    transition:'all 500ms',
    
    backgroundColor:'$white',

    variants:{
        position:{
            bottom:{
                bottom:-1,
            },

            top:{
                top:29
            },

            textarea:{
                top:174
            }
        }
    }
});

interface props{
    position:'top' | 'bottom' | 'textarea';
}

export default function ExpandingLine(props:props){

    return(
        <Div position={props.position}>
        
        </Div>
    );
}