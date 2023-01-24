import axios from "axios";
import { useEffect, useState } from "react";
import { INews } from "../../models/INews";
import { styled } from "../../stitches.config";
import H2 from "../H2";
import Article from "./Article";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";
import { NewsInView } from "../../atoms/NewsInView";
import TopRef from "../TopRef";

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
    const [newsInView, setNewsInView] = useRecoilState(NewsInView);
    const [thresh, setThresh] = useState(0);
    const {ref, inView, entry} = useInView({threshold:thresh});

    async function getNews(){
        let res = await axios.get('api/getNews');
        setNews(res.data.items);
    }
   
    useEffect(() => {

        getNews();

        if(window.innerWidth >= 735){ // >=735 is 2 columns of releases, <735 is 1 column
            setThresh(0.6);
        }
        else{
            setThresh(0.3);
        }
    },[]);

    useEffect(() => {
        
        if(newsInView.topRefInView){
            setNewsInView(prev => ({...prev, inView: inView}));
        }

    }, [inView]);


    return(
        <Div ref={ref}>
            <TopRef category="news"></TopRef>

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