import React from "react";
import { styled } from "../stitches.config";

const Div = styled('div', {

    position:'relative'
})

interface props{
    children:React.ReactNode;
}

export default function Wrapper(props:props){

    return(
        <Div>
            {props.children}
        </Div>
    );
}