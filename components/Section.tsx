import { styled } from "../stitches.config";

const StyledSection = styled('section', {

    position:'relative',
    paddingLeft:26,
    paddingRight:26,
    overflowX:'hidden',

    variants:{
        paddingTop:{
            200:{
                paddingTop:200
            }
        },
        viewHeight100:{
            true:{
                height:'100vh'
            }
        }
    }
});

const BackgroundImage = styled('img', {

});

interface props{
    children:React.ReactNode;
    paddingTop?:200;
    viewHeight100?:boolean;
}

export default function Section(props:props){

    return(
        <StyledSection paddingTop={props.paddingTop} viewHeight100={props.viewHeight100}>
            {props.children}
        </StyledSection>
    );
}