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
        },

        height:{
            100:{
                height:'100vh'
            }
        }
    }
});

interface props{
    children:React.ReactNode;
    paddingBottom?:250;
    height?:100;
}

export default function Section(props:props){

    return(
        <StyledSection paddingBottom={props.paddingBottom} height={props.height}>
            {props.children}
        </StyledSection>
    );
}