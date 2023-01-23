import { styled } from "../stitches.config";

const StyledH2 = styled('h2', {

    margin:0,
    marginBottom:50,

    textAlign:'center',
    fontSize:'$header',
    userSelect:'none',

    variants:{
        color:{
            black:{
                color:'$black'
            },
            white:{
                color:'$white',
            }
        }
    }
});

interface props{
    text:string;
    color:'black' | 'white';
}

export default function H2(props:props){

    return(
        <StyledH2 color={props.color}>
            {props.text}
        </StyledH2>
    );
}