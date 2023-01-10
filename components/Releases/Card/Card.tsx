import { useEffect, useState } from "react";
import { styled } from "../../../stitches.config";
import styles from "./Card.module.scss";

const Article = styled('article', {

    position:'relative',
    width:400,
    height:400,
    padding:20,

    backgroundSize:'cover',
    userSelect:'none',
    border:'1px solid $white',
    transition:'all 200ms',
    cursor:'pointer',

    '&:hover':{
        transform:'scale(1.05)'
    }
});

const DivBorderAnimation = styled('div', {

    position:'absolute',
    inset:0
});

const BottomDiv = styled('div', {

    width:'calc(100% - 40px)',
    position:'absolute',
    bottom:20,
    left:20,

    display:'flex',
    justifyContent:'space-between'
});

const Title = styled('h3', {

    margin:0,

    fontSize:25,
});

const ReleaseDate = styled('p', {

    margin:0,
});

const Img = styled('img', {

    width:50,
});

interface props{

    title:string;
    releaseDate:string;
    image:string;
}

export default function Card(props:props){

    const [releaseDate, setReleaseDate] = useState('');

    useEffect(() => {

        let date = new Date(props.releaseDate);
        setReleaseDate(String(date.getFullYear())); 
    }, []);

    return(
        <Article style={{backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%), url(${props.image})`}}>
            
            <DivBorderAnimation className={styles.borderAnimation}>

                <BottomDiv>
                    <div>
                        <Title>{props.title}</Title>
                        <ReleaseDate>{releaseDate}</ReleaseDate>
                    </div>
                    <Img src="/images/icons/play.svg"></Img>
                </BottomDiv>
                
            </DivBorderAnimation>
        </Article>
    );
}