import { useRecoilValue } from "recoil";
import { ToggleAboutAnimation } from "../../atoms/ToggleAboutAnimation";
import { styled } from "../../stitches.config";

const Outer = styled('div', {

    position:'absolute',
    inset:0,
    zIndex:1,

    overflow:'hidden',
});

const RotateDiv = styled('div', {
    
    position:'absolute',
    inset:0,
    
    transform:'rotate(20deg)'
});

const LeftDiv = styled('div', {

    position:'absolute',
    top:0,
    left:0,
    width:'50%',
    height:'100%',

    transition:'all 1000ms',
    backgroundColor:'#242424',

    variants:{
        transform:{
            true:{
                left:'-50%'
            },
            false:{
            }
        }
    }
});

const RightDiv = styled('div', {

    position:'absolute',
    top:0,
    right:0,
    width:'50%',
    height:'100%',

    transition:'all 1000ms',
    backgroundColor:'#3d3d3d',

    variants:{
        transform:{
            true:{
                right:'-50%',
            },
            false:{
            }
        }
    }
});

export default function AboutAnimation(){

    const toggleAboutAnimation = useRecoilValue(ToggleAboutAnimation);

    return(
        <Outer>
            <RotateDiv>
                <LeftDiv transform={false}></LeftDiv>
                <RightDiv transform={false}></RightDiv>
            </RotateDiv>
        </Outer>
    );
}