import React from "react";
import { useBreakpoint } from "use-breakpoint";
import { INews } from "../../models/INews";
import { styled } from "../../stitches.config";
import { BREAKPOINTS } from "../../variables/breakpoints";

const StyledArticle = styled('article', {

    marginBottom:20
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

    return(
        <StyledArticle>
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
        </StyledArticle>
    );
}