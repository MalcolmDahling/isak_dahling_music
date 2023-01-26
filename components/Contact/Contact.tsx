import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ToggleContact } from "../../atoms/ToggleContact";
import { keyframes, styled } from "../../stitches.config";
import ExitButton from "../ExitButton";

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
    width:500,
    height:500,
});


export default function Contact(){

    const [toggleContact, setToggleContact] = useRecoilState(ToggleContact);
    const [showContact, setShowContact] = useState(true);
    const [emailAddress, setEmailAddress] = useState('');

    async function getEmail(){

        let res = await axios.get('api/getEmail');
        setEmailAddress(res.data.items[0].fields.email);
    }

    useEffect(() => {

        getEmail();
    }, []);

    useEffect(() => {

        if(toggleContact){

            setShowContact(true);
        }

        else{

            setTimeout(() => {

                setShowContact(false);
            }, 500);
        }
        
    }, [toggleContact]);

    return(
        <>
            {showContact &&
                <BackgroundDiv fade={toggleContact}>
                    <ContentDiv>
                        <ExitButton close={() => {setToggleContact(false);}}></ExitButton>
                    </ContentDiv>
                </BackgroundDiv>
            }
        </>
    );
}