import Link from "next/link";
import { styled } from "../../stitches.config";

const StyledFooter = styled('footer', {

    width:'100%',
    marginTop:200,
    paddingBottom:100,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:50
});

const NameAndLogo = styled('div', {

    position:'relative',
});

const Name = styled('p', {

    margin:0,
    marginLeft:80,

    fontSize:24,
    fontWeight:'bold',
});

const Logo = styled('img', {

    position:'absolute',
    top:-135,
    left:0,
    width:300,
    marginRight:-100,
    marginLeft:-115,

    pointerEvents:'none'
});

const BottomText = styled('p', {

    margin:0,
});

const GitHubLink = styled(Link, {

    color:'$white'
});

export default function Footer(){

    return(
        <StyledFooter>

            <NameAndLogo>
                <Logo src="/images/logo.svg"></Logo>
                <Name>ISAK DAHLING MUSIC</Name>
            </NameAndLogo>

            <BottomText>2023 &nbsp; - &nbsp; Website made by <GitHubLink href="https://github.com/MalcolmDahling">Malcolm Dahling</GitHubLink></BottomText>

        </StyledFooter>
    );
}