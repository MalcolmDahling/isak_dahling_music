import Link from "next/link";
import { useRecoilValue } from "recoil";
import { SocialMedia } from "../atoms/SocialMedia";
import { styled } from "../stitches.config";

const Div = styled('div', {

    paddingLeft:20,
    paddingRight:20,

    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    gap:20,

    '&:hover a':{
        opacity:0.5
    },

    variants:{
        positionAbsolute:{
            true:{
                position:'absolute',
                left:0,
                right:0,
                bottom:40,
            }
        }
    }
});

const StyledLink = styled(Link, {

    display:'flex',
    flexDirection:'column',
    alignItems:'center',

    textDecoration:'none',
    transition:'all 250ms',

    '&:hover':{
        opacity:'1 !important'
    }
});

const Img = styled('img', {

    

    '@tablet':{
        width:40,
        height:40,
    },

    variants:{
        smallerIcons:{
            true:{
                width:50,
                height:50
            },
            false:{
                width:70,
                height:70,
            }
        }
    }
});

const P = styled('p', {

    margin:0,
    marginTop:5,

    color:'$white',
});

interface props{
    positionAbsolute?:boolean;
    useNames:boolean;
    smallerIcons:boolean;
}

export default function Socials(props:props){

    const socialMedia = useRecoilValue(SocialMedia);

    return(
        <Div positionAbsolute={props.positionAbsolute}>
            {
                socialMedia.map((social, i) => {

                    return(
                        <StyledLink href={social.fields.link} key={social.fields.title}>
                            <Img src={social.fields.image.fields.file.url} alt={social.fields.title} smallerIcons={props.smallerIcons}></Img>
                            {props.useNames && <P>{social.fields.title}</P>}
                        </StyledLink>
                    );
                })
            }
        </Div>
    );
}