import { styled } from "../../stitches.config";
import { useFormContext } from 'react-hook-form';

const StyledTextArea = styled('textarea', {

    width:'100%',
    height:100,
    marginBottom:10,

    resize:'none',
    border:'none',
    boxSizing:'border-box',
    opacity:0.75,
    transition:'all 250ms',

    '&:focus':{
        opacity:1,
    }
});

const Label = styled('label', {

    display:'block',
    marginBottom:5,
});

const Error = styled('p', {

    margin:0,

    color:'$error'
});

export default function TextArea(){

    const {register, getFieldState, formState} = useFormContext();
    const {error} = getFieldState('message', formState);

    return(
        <>
            <Label htmlFor="message">Message</Label>

            <StyledTextArea placeholder="Message" {...register(
                'message',
                {
                    required:true,
                    minLength:2
                }
            )}>
                
            </StyledTextArea>

            {error && <Error>Please enter your message.</Error>}
        </> 
    );
}