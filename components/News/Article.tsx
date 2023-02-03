import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useBreakpoint } from "use-breakpoint";
import { INews } from "../../models/INews";
import { keyframes, styled } from "../../stitches.config";
import { BREAKPOINTS } from "../../variables/breakpoints";

const MoveInAnim = keyframes({

    '0%':{
        transform:'translateX(-100vw)',
        opacity:0,
        filter:'blur(12px)'
    },

    '100%':{
        transform:'translateX(0px)',
        opacity:1,
        filter:'blur(0px)'
    }
})

const StyledArticle = styled('article', {

    marginBottom:20,
    
});

const Content = styled('div', {

    transform:'translateX(-100vw)',

    variants:{
        inView:{
            true:{
                animation:`${MoveInAnim} 1000ms forwards`
            }
        }
    }
});

const H3 = styled('h3', {

    margin:0,
    marginBottom:20,

    fontSize:24
});

const Div = styled('div', {

    display:'flex',
    justifyContent:'space-between',
    gap:20,
});

const P = styled('p', {

    margin:0,
});

const Span = styled('span', {

    display:'block'
});

const Img = styled('img', {

    height:300,
    display:'block',
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom:20,
});

const DateP = styled('p', {

    margin:0,
    
    textAlign:'end'
});

interface props{
    newsItem:INews;
}

export default function Article(props:props){

    const {breakpoint} = useBreakpoint(BREAKPOINTS, 'desktop');
    const date = new Date(props.newsItem.sys.createdAt);
    const {ref, inView, entry} = useInView();
    const [articleInView, setArticleInView] = useState(false);
    
    useEffect(() => {

        if(inView){
            setArticleInView(true);
        }
    }, [inView]);
    
    return(
        <StyledArticle>
            <div ref={ref}></div>

            <Content inView={articleInView}>
                <H3>{props.newsItem.fields.title}</H3>

                <Div>
                
                    <P>
                        {props.newsItem.fields.text.content.map((content, i) => {

                            return(
                                <React.Fragment key={i}>
                                    <Span>
                                        {content.content[0].value}
                                    </Span>
                                    <br/>
                                </React.Fragment>
                            );
                        })}

                        
                    </P>

                    {props.newsItem.fields.image && breakpoint === 'desktop' ? 
                        <Img src={props.newsItem.fields.image.fields.file.url}></Img>
                    : null}
                </Div>

                {props.newsItem.fields.image && breakpoint !== 'desktop' ? 
                        <Img src={props.newsItem.fields.image.fields.file.url}></Img>
                : null}

                <DateP>{date.toLocaleDateString()}</DateP>
            </Content>
        </StyledArticle>
    );
}