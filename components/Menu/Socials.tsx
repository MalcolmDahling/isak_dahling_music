import Link from "next/link";
import { useRecoilValue } from "recoil";
import { SocialMedia } from "../../atoms/SocialMedia";
import { styled } from "../../stitches.config";

const Div = styled('div', {

    // position:'absolute',
    // left:0,
    // right:0,
    // bottom:40,

    paddingLeft:20,
    paddingRight:20,
    marginBottom:20,

    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    gap:15,

    '&:hover a, &:focus-within a':{
        opacity:0.5
    }
});

const StyledLink = styled(Link, {

    display:'flex',
    flexDirection:'column',
    alignItems:'center',

    textDecoration:'none',
    transition:'all 250ms',

    '&:hover, &:focus':{
        opacity:'1 !important'
    }
});

const Img = styled('img', {

    width:50,
    height:50,

    '@tablet':{
        width:40,
        height:40,
    },
});

const P = styled('p', {

    margin:0,
    marginTop:5,

    color:'$white',
});

export default function Socials(){

    const socialMedia = useRecoilValue(SocialMedia);

    return(
        <Div>
            {
                socialMedia.map((social, i) => {

                    return(
                        <StyledLink href={social.fields.link} key={social.fields.title}>
                            <Img src={social.fields.image.fields.file.url} alt={social.fields.title}></Img>
                            <P>{social.fields.title}</P>
                        </StyledLink>
                    );
                })
            }
        </Div>
    );
}