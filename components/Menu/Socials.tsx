import Link from "next/link";
import { styled } from "../../stitches.config";

const Div = styled('div', {

    position:'absolute',
    bottom:20,
    paddingLeft:20,
    paddingRight:20,

    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    gap:20,

    '&:hover a':{
        opacity:0.5
    },

    '@menuBig':{
        paddingLeft:70,
        paddingRight:70
    },

    '@menuMedium':{
        paddingLeft:30,
        paddingRight:30
    },

    '@menuSmall':{
        paddingLeft:10,
        paddingRight:10
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

    width:70,
    height:70,
});

const P = styled('p', {

    margin:0,
    marginTop:5,

    color:'$white',
});

export default function Socials(){

    const links = [
        {name:'Facebook', link:'https://www.facebook.com/isakdahlingmusic'},
        {name:'Soundcloud', link:'https://soundcloud.com/isakdahling'},
        {name:'Instagram', link:'https://www.instagram.com/isakdahling/'},
        {name:'Spotify', link:'https://open.spotify.com/artist/0TxYGvNHyaDxPCsHExowda'},
        {name:'Youtube', link:'https://www.youtube.com/@isakdahling680'},
    ];

    return(
        <Div>
            {
                links.map((link, i) => {

                    return(
                        <StyledLink href={link.link} key={link.name}>
                            <Img src={`/images/icons/${link.name}.svg`} alt={link.name}></Img>
                            <P>{link.name}</P>
                        </StyledLink>
                    );
                })
            }
        </Div>
    );
}