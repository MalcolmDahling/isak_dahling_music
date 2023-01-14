import { styled } from "../stitches.config";

const StyledSection = styled('section', {

    position:'relative',
    // paddingLeft:26,
    // paddingRight:26,

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
        },

        overflowXHidden:{
            true:{
                overflowX:'hidden'
            }
        },

        backgroundColor:{
            white:{
                backgroundColor:'$white'
            },

            black:{
                backgroundColor:'$black'
            }
        }
    }
});

interface props{
    children:React.ReactNode;
    paddingTop?:200;
    viewHeight100?:boolean;
    overflowXHidden?:boolean;
    backgroundColor:'white' | 'black';
}

export default function Section(props:props){

    return(
        <StyledSection paddingTop={props.paddingTop} viewHeight100={props.viewHeight100} overflowXHidden={props.overflowXHidden} backgroundColor={props.backgroundColor}>
            {props.children}
        </StyledSection>
    );
}