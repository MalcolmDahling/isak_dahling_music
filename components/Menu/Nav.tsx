import { styled } from "../../stitches.config";
import MenuLink from "./StyledLink";

const StyledNav = styled('nav', {

    maxWidth:650,
    minWidth:250,
    paddingRight:20,

    display:'flex',
    flexDirection:'column',
    
    // pointerEvents:'none',

    // '&:hover > div':{
    //     opacity:0.3
    // }

    '&:hover a':{

        color:'$whiteHalfOpacity'
    },

    '@desktop':{

        width:'30vw',
        
        justifyContent:'space-between',
    },

    '@tablet':{
        
        width:'100%',
        marginTop:50,

        gap:40,
    }
});


export default function Nav(){

    const menuOptions = ['HOME', 'MUSIC', 'NEWS', 'ABOUT', 'CONTACT'];

    return(
        <StyledNav>
            {
                menuOptions.map((option, i:any) => {

                    return (
                        <MenuLink url="#" animationDelay={i} option={option} key={option}></MenuLink>
                    );
                })
            }
        </StyledNav>
    );
}