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

const OuterDiv = styled('div', {

    position:'relative',
    width:'100%',
    paddingTop:100,
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

    display:'flex'
});

const Img = styled('img', {

    maxHeight:500
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
        <OuterDiv id="ABOUT">
            <StickyText text="ABOUT" marginTop={220}></StickyText>

            <ContentDiv>
                <H2 text="- ABOUT -" color="black"></H2>

                <InnerDiv>
                    {breakpoint === 'desktop' && <Img src={profilePictures[0]?.fields.image.fields.file.url}></Img>}

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