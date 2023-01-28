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

const StyledInput = styled('input', {

    width:'0%',
    height:30,
    marginBottom:5,

    border:'none',
    boxSizing:'border-box',
    opacity:0,
    transition:'all 250ms',
    color:'$white',
    backgroundColor:'transparent',
    borderBottom:'1px solid $whiteHalfOpacity',
    animation:`${MoveRight} 1000ms forwards`,
    fontSize:16,

    '&:focus':{
        opacity:1,
        outline:'none',

        '+ div':{
            width:'100%'
        }
    },

    '&::placeholder':{
        
        color:'$white',
        fontSize:16,
        transition:'all 250ms',
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
        animationDelay:{
            0:{
                animationDelay:'400ms',
            },

            1:{
                animationDelay:'600ms',
            },

            2:{
                animationDelay:'800ms',
            }
        },

        hasFocus:{
            true:{
                opacity:1,
        
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
    name:string;
    label:string;
    errorMsg:string;
    animationDelay:0 | 1 | 2;
    setHasFocus:() => void;
    setNoFocus:() => void;
    hasFocus:boolean;
}

export default function Input(props:props){

    const {register, getFieldState, formState} = useFormContext();
    const {error} = getFieldState(props.name, formState);

    function validateEmail(email:string){
        // eslint-disable-next-line no-useless-escape
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };

    return(
        <Div>
            <StyledInput 
                placeholder={props.label} 
                animationDelay={props.animationDelay}
                onFocus={() => props.setHasFocus()}
                hasFocus={props.hasFocus}

                {...register(
                    props.name,
                    {
                        required: true,
                        minLength: 2,
                        onBlur:() => props.setNoFocus(),
                        validate: val => {
                            if(val && props.name === 'emailAddress'){
                                return validateEmail(val);
                            }
                        }
                    }
                )}>
            </StyledInput>

            <ExpandingLine position="top"></ExpandingLine>

            {error && <Error>{props.errorMsg}</Error>}
        </Div>
    );
}