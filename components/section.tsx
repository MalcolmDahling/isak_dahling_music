import { styled } from "../stitches.config";

const StyledSection = styled('section', {

    position:'relative',
    paddingLeft:26,

    variants:{
        paddingBottom:{
            250:{
                '@bp0':{
                    paddingBottom:250
                }
                
            }
        }
    }
});

interface props{
    children:React.ReactNode;
    paddingBottom?:number;
}

export default function Section(props:props){

    return(
        <StyledSection>
            {props.children}
        </StyledSection>
    );
}