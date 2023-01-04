import { keyframes, styled } from "../stitches.config";

const Outer = styled('div', {

    height:150,

    position:'absolute',
    transform:'translate(-50%)',
    left:'50%',
    bottom:'0%',
});

const ArrowAnim = keyframes({
    '0%':{transform:'translateY(0%)'},
    '50%':{transform:'translateY(100%)'},
    '100%':{transform:'translateY(0%)'}
});

const Inner = styled('div', {

    animation:`${ArrowAnim} 2000ms infinite ease-in-out`
});

const Arrow = styled('img', {

    width:25,
    display:'block',
    marginBottom:-20,

    transform:'rotate(90deg)',
    filter:'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)',
});

export default function ScrollDown(){

    return(
        <Outer>
            <Inner>
                <Arrow src="/images/icons/arrow_right.svg"></Arrow>
                <Arrow src="/images/icons/arrow_right.svg"></Arrow>
            </Inner>
        </Outer>
    );
}