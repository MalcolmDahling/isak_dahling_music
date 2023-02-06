import axios from "axios";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { useBreakpoint } from "use-breakpoint";
import { ToggleContact } from "../../atoms/ToggleContact";
import { ToggleScrolling } from "../../atoms/ToggleScrolling";
import { keyframes, styled } from "../../stitches.config";
import { BREAKPOINTS } from "../../variables/breakpoints";
import ExitButton from "../ExitButton";
import Input from "./Input";
import TextArea from "./TextArea";

const FadeOut = keyframes({

    '0%':{
        filter:'blur(0)',
        opacity:1
    },

    '100%':{
        filter:'blur(6px)',
        opacity:0
    }
});

const FadeIn = keyframes({

    '0%':{
        filter:'blur(6px)',
        opacity:0
    },

    '100%':{
        filter:'blur(0)',
        opacity:1
    }
});

const BackgroundDiv = styled('div', {

    position:'fixed',
    inset:0,
    zIndex:9,

    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    
    backgroundColor:'rgba(0,0,0,0.75)',
    backdropFilter:'blur(12px)',

    '@mobile':{
        alignItems:'flex-start'
    },

    variants:{
        fade:{
            true:{
                animation:`${FadeIn} 500ms forwards`
            },
            false:{
                animation:`${FadeOut} 500ms forwards`
            }
        }
    }
});

const ContentDiv = styled('div', {

    position:'relative',
    width:'80%',
    maxWidth:500,
    height:500,

    '@mobile':{
        marginTop:100,
    }
});

const H2 = styled('h2', {

    position:'relative',
    top:-6,
    margin:0,
    marginBottom:20,
    width:'fit-content',

    fontSize:30,
    fontWeight:'normal',
});

const Form = styled('form', {

    '&:hover input:not([type=submit])':{

        opacity:0.5
    },

    '&:hover input::placeholder':{
        opacity:0.5
    },

    '&:hover textarea':{

        opacity:0.5
    },

    '&:hover textarea::placeholder':{
        opacity:0.5
    },
});

const Submit = styled('input', {

    width:100,
    height:30,
    float:'right',

    border:'none',
    color:'$black',
    backgroundColor:'$white',
    fontFamily:'NeueHaasDisplayRoman',
    fontSize:16,
    fontWeight:'bold',
    cursor:'pointer',
    opacity:0.75,
    transition:'all 250ms',

    '&:hover':{
        opacity:1
    }
});

const Success = styled('p', {

    display:'inline',
    
    color:'green'
});

interface email{
    name:string;
    emailAddress:string;
    subject:string;
    message:string;
}

interface props{
    showIntro:boolean;
}

export default function Contact(props:props){

    const [toggleContact, setToggleContact] = useRecoilState(ToggleContact);
    const [showContact, setShowContact] = useState(true);
    const [isaksEmail, setIsaksEmail] = useState('');
    const {breakpoint} = useBreakpoint(BREAKPOINTS, 'desktop');
    const [success, setSuccess] = useState(false);
    const [hasFocus, setHasFocus] = useState<number | null>(null);
    const [toggleScrolling, setToggleScrolling] = useRecoilState(ToggleScrolling);

    const methods = useForm<email>({mode:'onTouched'});

    async function onSubmit(email:email){
        
        let res = await axios.post('api/sendEmail', {
            name: email.name,
            emailAddress: email.emailAddress,
            subject: email.subject,
            message: email.message,
            sendTo: isaksEmail
        });
        
        if(res.data === 'success'){

            setSuccess(true);
            methods.reset();
        }
    }

    async function getEmail(){

        let res = await axios.get('api/getEmail');
        setIsaksEmail(res.data.items[0].fields.email);
    }

    useEffect(() => {

        getEmail();
    }, []);

    useEffect(() => {

        if(toggleContact){

            //fixes a bug where scrolling occured when focusing the textarea on mobile.
            if(breakpoint === 'mobile'){
                document.body.style.overflowY = 'hidden';
            }

            //disables scrolling
            setToggleScrolling(false);

            setShowContact(true);
        }

        else{

            if(props.showIntro === false){

                if(breakpoint === 'mobile'){
                    document.body.style.overflowY = 'auto';
                }

                setTimeout(() => {

                    //enables scrolling
                    setToggleScrolling(true);
                }, 250);
            }

            setTimeout(() => {

                methods.reset();
                setSuccess(false);
                setShowContact(false);
            }, 500);
        }
        
    }, [toggleContact]);

    return(
        <>
            {showContact &&
                <BackgroundDiv fade={toggleContact}>

                    {breakpoint !== 'desktop' && <ExitButton close={() => {setToggleContact(false);}}></ExitButton>}

                    <ContentDiv>
                        {breakpoint === 'desktop' && <ExitButton close={() => {setToggleContact(false);}}></ExitButton>}

                        <H2>SEND ME AN EMAIL</H2>

                        <FormProvider {...methods}>
                            <Form onSubmit={methods.handleSubmit(onSubmit)}>
                                <Input 
                                    name="name" 
                                    label="Your name" 
                                    errorMsg="Please enter your name." 
                                    animationDelay={0} 
                                    setHasFocus={() => {setHasFocus(0); setSuccess(false);}} 
                                    setNoFocus={() => {setHasFocus(null)}}
                                    hasFocus={hasFocus === 0 ? true : false}
                                ></Input>

                                <Input 
                                    name="emailAddress" 
                                    label="Your email address" 
                                    errorMsg="Please enter your email address." 
                                    animationDelay={1} 
                                    setHasFocus={() => {setHasFocus(1); setSuccess(false);}} 
                                    setNoFocus={() => {setHasFocus(null)}}
                                    hasFocus={hasFocus === 1 ? true : false}
                                ></Input>

                                <Input 
                                    name="subject" 
                                    label="Subject" 
                                    errorMsg="Please enter a subject." 
                                    animationDelay={2} 
                                    setHasFocus={() => {setHasFocus(2); setSuccess(false);}} 
                                    setNoFocus={() => {setHasFocus(null)}}
                                    hasFocus={hasFocus === 2 ? true : false}
                                ></Input>

                                <TextArea 
                                    setHasFocus={() => {setHasFocus(3); setSuccess(false);}} 
                                    setNoFocus={() => {setHasFocus(null)}}
                                    hasFocus={hasFocus === 3 ? true : false}
                                ></TextArea>

                                {success && <Success>Your message was sent!</Success>}

                                <Submit type="submit" value="SEND"></Submit>
                            </Form>
                        </FormProvider>
                    </ContentDiv>
                </BackgroundDiv>
            }
        </>
    );
}