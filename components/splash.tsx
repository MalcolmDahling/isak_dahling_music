import { styled } from "../stitches.config";
import ScrollDown from "./ScrollDown";

const Div = styled('div', {

    display:'flex',
});

const Img = styled('img', {

    maxWidth:1920,
    width:'100%',
    margin:'auto',
});

interface props{
    image:string;
}

export default function Splash(props:props){

    return(
        <Div>
            <Img src={props.image}></Img>
            <ScrollDown></ScrollDown>
        </Div>
    );
}