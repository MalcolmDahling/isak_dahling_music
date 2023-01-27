import { styled } from "../../stitches.config";
import { useFormContext } from 'react-hook-form';
import { useState } from "react";

const Div = styled('div', {

    marginBottom:10
});

const Label = styled('label', {

    display:'block',
    marginBottom:5,
});

const StyledInput = styled('input', {

    width:'100%',
    height:30,
    marginBottom:5,
    paddingLeft:5,

    border:'none',
    boxSizing:'border-box',
    opacity:0.75,
    transition:'all 250ms',

    '&:focus':{
        opacity:1
    }
});

const Error = styled('p', {

    margin:0,

    color:'$error'
});

interface props{
    name:string;
    label:string;
    errorMsg:string;
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
            <Label htmlFor={props.name}>{props.label}</Label>

            <StyledInput placeholder={props.label} {...register(
                props.name,
                {
                    required: true,
                    minLength: 2,
                    validate: val => {
                        if(val && props.name === 'emailAddress'){
                            return validateEmail(val);
                        }
                    }
                }
            )}>

            </StyledInput>

            {error && <Error>{props.errorMsg}</Error>}
        </Div>
    );
}