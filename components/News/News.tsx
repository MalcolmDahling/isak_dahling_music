import axios from "axios";
import { useEffect, useState } from "react";
import { INews } from "../../models/INews";
import { styled } from "../../stitches.config";
import H2 from "../H2";
import Article from "./Article";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";
import { NewsInView } from "../../atoms/NewsInView";
import { ComponentInView } from "../../atoms/ComponentInView";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "../../variables/breakpoints";

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

export default function News(){

    const [news, setNews] = useState<INews[]>([]);
    const [componentInView, setComponentInView] = useRecoilState(ComponentInView);
    const {breakpoint} = useBreakpoint(BREAKPOINTS, 'desktop');
    const [thresh, setThresh] = useState(0);
    const {ref, inView, entry} = useInView({threshold:thresh});

    async function getNews(){
        let res = await axios.get('api/getNews');
        setNews(res.data.items);
    }

    useEffect(() => {

        getNews();
    }, []);

    useEffect(() => {

        if(breakpoint === 'desktop'){
            setThresh(0.6);
        }
        if(breakpoint === 'tablet' || breakpoint === 'mobile'){
            setThresh(0.3);
        }
    }, [breakpoint]);
   
    useEffect(() => {

        if(!entry) return;

        if(entry.boundingClientRect.top > 0){ //positive below viewport, negative when above viewport

            setComponentInView(prev => ({...prev, news:entry.isIntersecting}))
        }

    }, [entry]);


    return(
        <Div ref={ref}>

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