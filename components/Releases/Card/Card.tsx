import { useEffect, useState } from "react";
import { keyframes, styled } from "../../../stitches.config";
import styles from "./Card.module.scss";

const ShineAnim = keyframes({

    '0%':{
        top:'50%',
        left:'-100%',
    },

    '100%':{
        left:'120%',
        top:'-120%',
    }
})

const Div = styled('div', {

    position:'relative',
    maxWidth:400,

    backgroundSize:'cover',
    userSelect:'none',
    border:'2px solid $white',
    transition:'all 500ms',
    cursor:'pointer',
    overflow:'hidden',
    borderRadius:15,

    '&:hover':{
        transform:'scale(1.05)'
    },

    '&:hover .glass':{
        animation:`${ShineAnim} 750ms`
    }
});

const Overlay = styled('div', {

    position:'absolute',
    inset:0,

    backgroundImage:'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)'
});

const Img = styled('img',{

    width:'100%',
    height:'100%'
});

const Glass = styled('div', {

    position:'absolute',
    top:'50%',
    left:'-100%',
    width:'100%',
    height:'200%',
    zIndex:1,
    pointerEvents:'none',
    
    transform:'rotate(-45deg)',
    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)',
    opacity:0.2,
    backdropFilter: 'blur(6px)',
    '-webkit-backdrop-filter': 'blur(6px)',
});

const BottomDiv = styled('div', {

    position:'absolute',
    bottom:20,
    left:20,
    right:20,

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

const Icon = styled('img', {

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
        <Div>
 
            <Glass className="glass"></Glass>

            <Overlay></Overlay> 
            
            <Img src={props.image} alt={props.title}></Img>

            <BottomDiv>
                <div>
                    <Title>{props.title}</Title>
                    <ReleaseDate>{releaseDate}</ReleaseDate>
                </div>
                <Icon src="/images/icons/play.svg"></Icon>
            </BottomDiv>

        </Div>
    );
}