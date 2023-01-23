import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { debounce } from "throttle-debounce";
import { NewsScroll } from "../../atoms/NewsScroll";
import { INews } from "../../models/INews";
import { styled } from "../../stitches.config";
import H2 from "../H2";
import Article from "./Article";
import { Songs } from "../../atoms/Songs";
import { ReleasesAreLoaded } from "../../atoms/ReleasesAreLoaded";

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
    const [newsScroll, setNewsScroll] = useRecoilState(NewsScroll);
    const releasesAreLoaded = useRecoilValue(ReleasesAreLoaded);
    const songs = useRecoilValue(Songs);
    const ref = useRef<any>();

    async function getNews(){
        let res = await axios.get('api/getNews');
        console.log('news:', res.data);
        setNews(res.data.items);
    }
   
    useEffect(() => {

        getNews();

        //used for ZoomEffect
        window.onresize = debounce(250, () => {

            setNewsScroll(prev => ({...prev, 
                newsPixelsFromTop: ref.current?.getBoundingClientRect().top + window.pageYOffset
            })); 
        });
    },[]);

    useEffect(() => {

        //used for ZoomEffect
        setNewsScroll(prev => ({...prev, 
            newsPixelsFromTop: ref.current?.getBoundingClientRect().top + window.pageYOffset
        }));
        
    }, [ref, releasesAreLoaded]); //setNewsScroll when songs are loaded so releases is the correct height

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