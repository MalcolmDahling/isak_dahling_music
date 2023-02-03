import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ProfilePictures } from "../../atoms/ProfilePictures";
import { IAbout } from "../../models/IAbout";
import { styled } from "../../stitches.config";
import H2 from "../H2";
import StickyText from "../StickyText";
import { useInView } from "react-intersection-observer";
import { ToggleAboutAnimation } from "../../atoms/ToggleAboutAnimation";
import Background from "./Background";

const OuterDiv = styled('div', {

    position:'relative',
    width:'100%',
});

const ContentDiv = styled('div', {

    position:'relative',
    maxWidth:800,
    margin:'auto',
    paddingTop:100,
    paddingLeft:60,
    paddingRight:60,

    '@mobile':{
        paddingLeft:20,
        paddingRight:20
    }
});

const RefDiv = styled('div', {

    position:'absolute',
    top:0,
    left:0,
    height:'80vh',
    width:10,
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
    const {ref, inView, entry} = useInView({threshold:0.8});
    const [toggleAboutAnimation, setToggleAboutAnimation] = useRecoilState(ToggleAboutAnimation);

    async function getAbout(){
        let res = await axios.get('api/getAbout');
        
        setAbout(res.data.items[0]);
    }

    useEffect(() => {

        getAbout();
    }, []);

    useEffect(() => {
        if(!entry) return;

        if(entry.boundingClientRect.top > 0){ //positive below viewport, negative when above viewport
            
            setToggleAboutAnimation(inView);
        }
        
    }, [entry]);

    return(
        <OuterDiv>

            <StickyText text="ABOUT" marginTop={515} fixedColor="black"></StickyText>

            <Background></Background>

            <ContentDiv id="ABOUT">
                <RefDiv ref={ref}></RefDiv>

                <H2 text="- ABOUT -" color="black"></H2>

                <InnerDiv>
                    <Img src={profilePictures[0]?.fields.image.fields.file.url} alt={profilePictures[0]?.fields.name}></Img>

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