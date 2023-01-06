import { styled } from "../stitches.config";

const Div = styled('div', {

    position:'fixed',
    top:20,
    right:20,
    zIndex:1,

    display:'flex',
    flexDirection:'column',
    gap:8,
    justifyContent:'center',
    alignItems:'center',

    cursor:'pointer',

    '&:hover .rotateDown':{
        
        transform:'rotate(90deg) translateX(13px)'
    },

    '&:hover .rotateUp':{
        
        transform:'rotate(90deg) translateX(-13px)'
    }
});

const Line = styled('div', {

    width:40,
    height:5,

    transition:'250ms',
    transformOrigin:'center',
    borderRadius:10,
    backgroundColor:'$white'
});

const Text = styled('p', {

    margin:0,
});

export default function Hamburger(){

    return(
        <Div>
            <Line className="rotateDown"></Line>
            <Line></Line>
            <Line className="rotateUp"></Line>
            <Text>MENU</Text>
        </Div>
    );
}