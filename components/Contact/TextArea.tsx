import { keyframes, styled } from "../../stitches.config";
import { useFormContext } from 'react-hook-form';
import ExpandingLine from "../ExpandingLine";

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

const Div = styled('div', {

    position:'relative',
    marginBottom:10
});

const StyledTextArea = styled('textarea', {

    width:'100%',
    height:200,
    marginBottom:10,

    resize:'none',
    border:'none',
    boxSizing:'border-box',
    opacity:0,
    transition:'all 250ms',
    backgroundColor:'transparent',
    animation:`${MoveRight} 1000ms forwards`,
    animationDelay:'1000ms',
    color:'$white',
    fontSize:16,
    fontFamily:'NeueHaasDisplayRoman',
    overflowX:'hidden',
    borderBottom:'1px solid $whiteHalfOpacity',

    '&:focus':{
        opacity:1,
        outline:'none',
    },

    '&::placeholder':{
        
        color:'$white',
        fontSize:16,
        fontFamily:'NeueHaasDisplayRoman',
        transition:'all 250ms',
        whiteSpace:'nowrap'
    },

    '&:hover':{

        '&::placeholder':{
            opacity:'1 !important'
        },

        '+ div':{
            width:'100%'
        }
    },

    variants:{
        hasFocus:{
            true:{
                '&::placeholder':{
                    opacity:'1 !important'
                },
        
                '+ div':{
                    width:'100%'
                }
            },
            false:{
                '&::placeholder':{
                    opacity:0.5
                }    
            }
        }
    }
});


const Error = styled('p', {

    margin:0,

    color:'$error'
});

type props = {
    setHasFocus:() => void;
    setNoFocus:() => void;
    hasFocus:boolean;
}


//When inputting enough text into the textarea so that it becomes scrollable, the text appears blurry in small resolutions in responsive mode in chrome.
//It is not blurry when tested on a real phone.
//It is probably a bug in chrome.

export default function TextArea(props:props){

    const {register, getFieldState, formState} = useFormContext();
    const {error} = getFieldState('message', formState);

    return(
        <Div>
            <StyledTextArea
                placeholder="Message"
                onFocus={() => props.setHasFocus()}
                hasFocus={props.hasFocus}
                
                {...register(
                    'message',
                    {
                        required:true,
                        minLength:2,
                        onBlur:() => props.setNoFocus()
                    }
                )}
            >    
            </StyledTextArea>

            <ExpandingLine position="textarea"></ExpandingLine>

            {error && <Error>Please enter your message.</Error>}
        </Div> 
    );
}