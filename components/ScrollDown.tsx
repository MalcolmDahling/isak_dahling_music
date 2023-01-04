import { styled } from "../stitches.config";

const Outer = styled('div', {

    height:200,

    position:'absolute',
    transform:'translate(-50%)',
    left:'50%',
    bottom:'0%'
});

const Inner = styled('div', {

    position:'sticky',
    top:0,
});

const Arrow = styled('img', {

    width:25,
    display:'block',
    marginBottom:-10,

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