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