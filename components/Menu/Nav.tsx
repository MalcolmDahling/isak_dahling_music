import Link from "next/link";
import { styled } from "../../stitches.config";

const StyledNav = styled('nav', {

    
    maxWidth:650,
    minWidth:300,

    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    // pointerEvents:'none',

    // '&:hover > div':{
    //     opacity:0.3
    // }

    '&:hover a':{

        color:'$whiteHalfOpacity'
    },

    '@desktop':{

        width:'30vw',
    },

    '@tablet':{
        
        width:'100%',

        gap:20,
    }
});

const StyledLink = styled(Link, {

    position:'relative',
    paddingBottom:10,
    paddingLeft:20,

    borderBottom:'1px solid $whiteHalfOpacity',
    fontSize:50,
    color:'$white',
    textDecoration:'none',
    transition:'all 500ms',

    '&:hover':{
        color:'$white !important'
    },

    '&:hover div':{
        width:'100%'
    },

    '@tablet':{
        paddingBottom:0,
        fontSize:35,
    }
});

const ExpandingLine = styled('div', {

    position:'absolute',
    bottom:-1,
    left:0,
    height:1,
    width:0,
    transition:'all 500ms',
    
    backgroundColor:'$white'
});

export default function Nav(){

    const menuOptions = ['HOME', 'MUSIC', 'NEWS', 'ABOUT', 'CONTACT'];

    return(
        <StyledNav>
            {
                menuOptions.map(option => {

                    return (
                        <StyledLink href="#" key={option}>
                            {option}
                            <ExpandingLine></ExpandingLine>
                        </StyledLink>
                    );
                })
            }
        </StyledNav>
    );
}