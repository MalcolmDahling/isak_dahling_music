import Link from "next/link";
import { styled } from "../../stitches.config";
import LogoSVG from "../../public/images/logo/logo.svg";

const StyledFooter = styled('footer', {

    width:'100%',
    paddingTop:100,
    paddingBottom:50,

    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:50,

    backgroundColor:'$white'
});

const NameAndLogo = styled('div', {

    position:'relative',
});

const Name = styled('p', {

    margin:0,
    marginLeft:80,

    fontSize:24,
    fontWeight:'bold',
    color:'$black'
});

const Logo = styled(LogoSVG, {

    position:'absolute',
    top:-135,
    left:0,
    width:300,
    marginRight:-100,
    marginLeft:-115,

    pointerEvents:'none',
    filter:'invert(100%)'
});

const BottomText = styled('p', {

    margin:0,

    color:'$black'
});

const GitHubLink = styled(Link, {

    color:'$black'
});

export default function Footer(){

    return(
        <StyledFooter>

            <NameAndLogo>
                <Logo></Logo>
                <Name>ISAK DAHLING MUSIC</Name>
            </NameAndLogo>

            <BottomText>2023 &nbsp; - &nbsp; Website made by <GitHubLink href="https://github.com/MalcolmDahling">Malcolm Dahling</GitHubLink></BottomText>

        </StyledFooter>
    );
}