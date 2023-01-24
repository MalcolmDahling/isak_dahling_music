import { useRecoilValue } from "recoil";
import { Songs } from "../atoms/Songs";
import { styled } from "../stitches.config";

const StyledSection = styled('section', {

    position:'relative',

    variants:{
        paddingBottom:{
            true:{
                paddingBottom:200
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
    paddingBottom?:boolean;
    viewHeight100?:boolean;
    overflowXHidden?:boolean;
    backgroundColor:'white' | 'black';
}

export default function Section(props:props){

    const songs = useRecoilValue(Songs);

    return(
        <StyledSection paddingBottom={props.paddingBottom} viewHeight100={props.viewHeight100} overflowXHidden={props.overflowXHidden} backgroundColor={props.backgroundColor}>
            {props.children}
        </StyledSection>
    );
}