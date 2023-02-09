import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";
import { ComponentInView } from "../atoms/ComponentInView";
import { styled } from "../stitches.config";

const RefDiv = styled('div', {

    position:'absolute',
    top:'80vh',
    left:0,
    height:'calc(100% - 80vh - 2px)',
    width:10
});

interface props{
    category:string;
}

export default function RefDiv1(props:props){

    const [componentInView, setComponentInView] = useRecoilState(ComponentInView);
    const {ref, inView, entry} = useInView();

    useEffect(() => {

        if(!entry) return;

        if(inView){

            if(props.category === 'releases'){
                setComponentInView(prev => ({...prev, releases:1}));
            }
            else{
                setComponentInView(prev => ({...prev, news:1}));
            }
        }
        
    }, [inView]);

    return(
        <RefDiv ref={ref}></RefDiv>
    );
}