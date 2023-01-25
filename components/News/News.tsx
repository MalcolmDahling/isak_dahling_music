import axios from "axios";
import { useEffect, useState } from "react";
import { INews } from "../../models/INews";
import { styled } from "../../stitches.config";
import H2 from "../H2";
import Article from "./Article";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";
import { ComponentInView } from "../../atoms/ComponentInView";

const Div = styled('div', {

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
    top:'100vh',
    left:0,
    height:'80vh',
    width:10
});

export default function News(){

    const [news, setNews] = useState<INews[]>([]);
    const [componentInView, setComponentInView] = useRecoilState(ComponentInView);
    const {ref, inView, entry} = useInView({threshold:componentInView.threshold});

    async function getNews(){
        let res = await axios.get('api/getNews');
        setNews(res.data.items);
    }

    useEffect(() => {

        getNews();
    }, []);
   
    useEffect(() => {

        if(!entry) return;

        if(entry.boundingClientRect.top > 0){ //positive below viewport, negative when above viewport

            setComponentInView(prev => ({...prev, news:entry.intersectionRatio}));
        }
    }, [entry]);

    return(
        <Div>
            <RefDiv ref={ref}></RefDiv>

            <H2 text="- NEWS -" color="white"></H2>
            {
                news.map((newsItem, i) => {

                    return(
                        <Article newsItem={newsItem} key={i}></Article>
                    );
                })
            }
        </Div>
    );
}