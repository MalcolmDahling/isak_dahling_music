import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useBreakpoint } from "use-breakpoint";
import { ProfilePictures } from "../../atoms/ProfilePictures";
import { IAbout } from "../../models/IAbout";
import { styled } from "../../stitches.config";
import { BREAKPOINTS } from "../../variables/breakpoints";
import H2 from "../H2";
import StickyText from "../StickyText";
import Grunge from "../../public/images/grunge.svg"

const OuterDiv = styled('div', {

    position:'relative',
    width:'100%',
    paddingTop:100,

    '@desktop':{
        paddingTop:200
    }
});

const BackgroundImage = styled(Grunge, {

    position:'absolute',
    top:0,
    left:0,
    right:0,
});

const ContentDiv = styled('div', {

    position:'relative',
    maxWidth:800,
    margin:'auto',

    paddingLeft:60,
    paddingRight:60,

    '@mobile':{
        paddingLeft:20,
        paddingRight:20
    }
});

const InnerDiv = styled('div', {

    display:'flex',

    '@tablet':{

        flexDirection:'column',
        alignItems:'center'
    }
});

const Img = styled('img', {

    maxHeight:600,
    
    '@tablet':{
        maxHeight:500,
    }
});

const P = styled('p', {

    color:'$black'
});

const Span = styled('span', {
    
    display:'block'
});

export default function About(){

    const profilePictures = useRecoilValue(ProfilePictures);
    const [about, setAbout] = useState<IAbout>();
    const {breakpoint} = useBreakpoint(BREAKPOINTS, 'desktop');

    async function getAbout(){
        let res = await axios.get('api/getAbout');
        
        setAbout(res.data.items[0]);
    }

    useEffect(() => {

        getAbout();
    }, []);

    return(
        <OuterDiv>
            <StickyText text="ABOUT" marginTop={220}></StickyText>

            <BackgroundImage></BackgroundImage>

            <ContentDiv id="ABOUT">
                <H2 text="- ABOUT -" color="black"></H2>

                <InnerDiv>
                    <Img src={profilePictures[0]?.fields.image.fields.file.url}></Img>

                    <P>
                        {about?.fields.text.content.map((text, i) => {

                            return(
                                <React.Fragment key={i}>
                                    <Span>
                                        {text.content[0].value}
                                    </Span>
                                    <br/>
                                </React.Fragment>
                            );
                        })}
                    </P>
                </InnerDiv>
            </ContentDiv>

        </OuterDiv>
    );
}