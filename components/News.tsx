import axios from "axios";
import { useEffect, useState } from "react";
import { INews } from "../models/INews";
import { styled } from "../stitches.config";

const Article = styled('article', {

});

const H2 = styled('h2', {

});

const P = styled('p', {

});

export default function News(){

    const [news, setNews] = useState<INews[]>([]);

    async function getNews(){
        let res = await axios.get('api/getNews');
        console.log('news:', res.data);
        setNews(res.data.items);
    }
   
    useEffect(() => {

        getNews();
    },[]);

    return(
        <>
            {
                news.map((article) => {

                    return(
                        <Article key={article.fields.title}>
                            <H2>{article.fields.title}</H2>
                            
                            {article.fields.content.map((content, i) => {

                                return(
                                    <P key={i}>
                                        {content.content.arr.map(arr => {

                                            return(
                                                <>
                                                    {arr.value}
                                                </>
                                            )
                                        })}
                                    </P>
                                );
                            })}
                        </Article>
                    );
                })
            }
        </>
    );
}