import Link from "next/link";
import { useRecoilState } from "recoil";
import { styled } from "../../stitches.config";
import { ToggleContact } from "../../atoms/ToggleContact";
import Socials from "../Socials";

const StyledFooter = styled('footer', {

    width:'100%',
    marginTop:200,
    paddingBottom:30,

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

const LinkDiv = styled('div', {

    display:'flex',
    justifyContent:'center',
    flexWrap:'wrap',
    gap:10,

    marginLeft:25,
    marginRight:25
});

const Line = styled('div', {

    height:1,
    width:'80%',
    maxWidth:400,
    
    backgroundColor:'$white'
});

const StyledLink = styled(Link, {

    fontSize:20,
    color:'$gray',
    textDecoration:'none',
    transition:'all 250ms',

    '&:hover':{
        color:'$white'
    }
});

const EmailButton = styled('button', {

    padding:0,

    fontSize:20,
    color:'$gray',
    transition:'all 250ms',
    backgroundColor:'transparent',
    border:'none',
    textAlign:'start',
    cursor:'pointer',

    '&:hover':{
        color:'$white'
    }
});

const BottomText = styled('p', {


});

export default function Footer(){

    const [toggleContact, setToggleContact] = useRecoilState(ToggleContact);

    return(
        <StyledFooter>

            <NameAndLogo>
                <Logo src="/images/logo.svg"></Logo>
                <Name>ISAK DAHLING MUSIC</Name>
            </NameAndLogo>

            <LinkDiv>
                <StyledLink href="#">HOME</StyledLink>
                <StyledLink href="#">MUSIC</StyledLink>
                <StyledLink href="#">NEWS</StyledLink>
                <StyledLink href="#">ABOUT</StyledLink>
                <EmailButton onClick={() => {setToggleContact(true);}}>EMAIL ME</EmailButton>
            </LinkDiv>

            <Line></Line>
            <Socials useNames={false} smallerIcons={true}></Socials>

            <BottomText>2023 &nbsp; - &nbsp; Website made by Malcolm Dahling</BottomText>

        </StyledFooter>
    );
}