import { styled } from "../stitches.config";
import ScrollDown from "./ScrollDown";

const Div = styled('div', {

});

const Img = styled('img', {

    position:'absolute',
    height:'100vh',
    left:'50%',
    transform:'translateX(-50%)',
});

const H1 = styled('h1', {

    position:'absolute',
    bottom:20,
    right:20,
    margin:0,

    textAlign:'right',
    fontSize:'$header',
    textShadow:'0px 0px 10px black',
    userSelect:'none',
});

interface props{
    image:string;
}

export default function Hero(props:props){

    return(
        <Div>
            <Img src={props.image} draggable={false}></Img>
            <H1>ISAK DAHLING<br/>MUSIC</H1>
            <ScrollDown></ScrollDown>
        </Div>
    );
}