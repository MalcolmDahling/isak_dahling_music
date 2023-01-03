import { styled } from "../stitches.config";

const Div = styled('div', {

    display:'flex',
});

const Img = styled('img', {

    maxWidth:1920,
    width:'100%',
    margin:'auto'
});

interface props{
    image:string;
}

export default function Splash(props:props){

    return(
        <Div>
            <Img src={props.image}></Img>
        </Div>
    );
}