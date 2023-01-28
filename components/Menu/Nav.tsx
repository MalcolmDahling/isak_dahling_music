import { styled } from "../../stitches.config";
import MenuLink from "./MenuLink";

const StyledNav = styled('nav', {

    maxWidth:650,
    minWidth:250,
    paddingRight:20,

    display:'flex',
    flexDirection:'column',

    '&:hover button':{

        color:'$whiteHalfOpacity'
    },

    '@desktop':{

        width:'30vw',
        
        justifyContent:'space-between',
    },

    '@tablet':{
        
        width:'100%',
        marginTop:20,

        gap:30,
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