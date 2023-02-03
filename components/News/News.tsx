import axios from "axios";
import { useEffect, useState } from "react";
import { INews } from "../../models/INews";
import { styled } from "../../stitches.config";
import H2 from "../H2";
import Article from "./Article";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";
import { ComponentInView } from "../../atoms/ComponentInView";
import StickyText from "../StickyText";
import ExpandingLine from "../ExpandingLine";

const OuterDiv = styled('div', {

    position:'relative',
    width:'100%',
    paddingBottom:100,
});

const Div = styled('div', {

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

const RefDiv = styled('div', {

    position:'absolute',
    top:0,
    left:0,
    height:'80vh',
    width:10,
});

const ButtonContainer = styled('div', {

    display:'flex',
    justifyContent:'center',
    gap:20,
    transition:'all 500ms',

    '&:hover button':{
        color:'$whiteHalfOpacity'
    },

    variants:{
        fadeOut:{
            true:{
                visibility:'hidden',
                opacity:0,
            }
        }
    }
});

const Button = styled('button', {

    position:'relative',
    zIndex:1,
    padding:0,
    paddingBottom:5,

    backgroundColor:'transparent',
    border:'none',
    color:'$white',
    fontWeight:'bold',
    fontFamily:'NeueHaasDisplayRoman',
    fontSize:20,
    textAlign:'left',
    cursor:'pointer',
    borderBottom:'1px solid $whiteHalfOpacity',
    transition:'all 500ms',

    '&:hover':{
        color:'$white !important'
    },

    '&:hover div':{
        width:'100%'
    }
});

export default function News(){

    const [news, setNews] = useState<INews[]>([]);
    const [componentInView, setComponentInView] = useRecoilState(ComponentInView);
    const {ref, inView, entry} = useInView({threshold:componentInView.threshold});
    const [fadeOutButtons, setFadeOutButtons] = useState(false);
    const [numberToDisplay, setNumberToDisplay] = useState(4);
    const [total, setTotal] = useState(9999999999);

    async function getNews(){

        let res = await axios.get('api/getNews');
        setNews(res.data.items);
        setTotal(res.data.total);
    }

    useEffect(() => {

        if(numberToDisplay >= total){

            setFadeOutButtons(true);
        }
    }, [numberToDisplay]);

    useEffect(() => {

        getNews();
    }, []);
   
    useEffect(() => {

        if(!entry) return;

        if(entry.boundingClientRect.top > 0){ //positive below viewport, negative when above viewport

            setComponentInView(prev => ({...prev, news:entry.intersectionRatio}));
        }
    }, [entry]);

    function loadFiveMore(){
        
       setNumberToDisplay(numberToDisplay + 5);
    }

    function loadAll(){
        
        setNumberToDisplay(9999999999);
    }

    return(

        <OuterDiv id="NEWS">
            <StickyText text="NEWS" marginTop={105} fixedColor={false}></StickyText>

            <Div>
                <RefDiv ref={ref}></RefDiv>

                <H2 text="- NEWS -" color="white"></H2>
                {
                    news.map((newsItem, i) => {

                        if(i <= numberToDisplay){

                            return(
                                <Article newsItem={newsItem} key={i}></Article>
                            );
                        }
                    })
                }
            </Div>

            <ButtonContainer fadeOut={fadeOutButtons}>
                <Button onClick={loadFiveMore}>
                    LOAD MORE
                    <ExpandingLine position="bottom"></ExpandingLine>
                </Button>

                <Button onClick={loadAll}>
                    LOAD ALL
                    <ExpandingLine position="bottom"></ExpandingLine>
                </Button>
            </ButtonContainer>
            
        </OuterDiv>
    );
}